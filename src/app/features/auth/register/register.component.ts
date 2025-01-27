import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = new FormGroup({
    fullName: new FormControl(''),
    affiliation: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private authService: AuthService) { }

  onSubmit() {
    
  }

}
