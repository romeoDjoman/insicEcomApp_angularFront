import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../../core/models/user-data-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  loading = false;
  errorMessage: string = '';
  availableRoles = ['Client', 'Author', 'Admin'];
  permissions: { [key: string]: string[] } = {
    'Client': ['read', 'buy'],
    'Author': ['read', 'write', 'edit'],
    'Admin': ['read', 'write', 'edit', 'delete', 'manage']
  };
  selectedPermissions: string[] = [];
  isAdmin: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      position: ['', [Validators.required]],
      role: ['Client', [Validators.required]],
      permissions: [{ value: ['read', 'buy'], disabled: true }]
    }, {
      validator: this.passwordMatchValidator // Ajout de la validation personnalisée
    });

    // Mise à jour dynamique des permissions en fonction du rôle sélectionné
    this.onRoleChange();
    this.registerForm.get('role')?.valueChanges.subscribe(() => {
      this.onRoleChange();
    });
  }

   // Mettre à jour les permissions en fonction du rôle sélectionné
  onRoleChange(): void {
    const selectedRole = this.registerForm.get('role')?.value;
    this.selectedPermissions = this.permissions[selectedRole] || [];
    const permissionsControl = this.registerForm.get('permissions');

    if (selectedRole === 'Admin') {
      this.isAdmin = true;
      permissionsControl?.enable();  // Rendre les permissions modifiables si Admin
    } else {
      this.isAdmin = false;
      permissionsControl?.setValue(this.selectedPermissions);
      permissionsControl?.disable();  // Désactiver les permissions pour les autres rôles
    }
  }

  // Fonction de validation personnalisée pour vérifier si les mots de passe correspondent
  passwordMatchValidator(group: FormGroup): null | object {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password && confirmPassword && password === confirmPassword ? null : { 'passwordMismatch': true };
  }

  onRegister() {
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    const newUser: User = this.registerForm.value;

    this.authService.register(newUser).subscribe(
      user => {
        this.router.navigate(['/auth/login']);  
      },
      error => {
        this.errorMessage = 'Une erreur est survenue. Veuillez réessayer plus tard.';
        this.loading = false;
      }
    );
  }

  getErrorMessage(field: string): string {
    const control = this.registerForm.controls[field];

    if (control.errors) {
      if (control.errors['required']) {
        return `${field} est requis.`;
      } else if (control.errors['minlength']) {
        return `Le ${field} doit comporter au moins ${control.errors['minlength'].requiredLength} caractères.`;
      } else if (control.errors['email']) {
        return 'Veuillez entrer un email valide.';
      } else if (control.errors['firstName']) {
        return 'Veuillez entrer un prénom valide.';
      } else if (control.errors['lastName']) {
        return 'Veuillez entrer un nom valide.';
      } else if (control.errors['position']) {
        return 'Veuillez indiquer votre position.';
      } else if (control.errors['passwordMismatch']) {
        return 'Les mots de passe ne correspondent pas.';
      }
    }

    return '';
  }
}
