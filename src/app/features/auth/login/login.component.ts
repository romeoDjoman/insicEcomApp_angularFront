import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  loading = false;
  errorMessage: string = ''; // Message d'erreur en cas d'échec de connexion

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
      .subscribe(
        user => {
          this.router.navigate(['/home']);
          this.loading = true;
          console.log('Connexion réussie !');
        },
        error => {
          this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
          this.loading = false;
        }
      );
  }

  getErrorMessage(field: string): string {
    const control = this.loginForm.controls[field];

    if (control.errors?.['required']) {
      return `${field} est requis.`;
    } else if (control.errors?.['email']) {
      return `Veuillez entrer un email valide.`;
    } else if (control.errors?.['minlength']) {
      return `Le mot de passe doit comporter au moins 6 caractères.`;
    }

    return '';
  }
}
