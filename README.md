Below is an example of how to create **Login** and **Register** forms in Angular. These forms include validation, proper structure, and interaction with an authentication service.  

---

### **1. Login Component**

#### **Generate Login Component**
Run the following Angular CLI command to generate a login component:  
```bash
ng generate component features/auth/login
```

#### **Code: Login Component**

**`login.component.html`**
```html
<div class="login-container">
  <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
    <h2>Login</h2>
    
    <div class="form-group">
      <label for="email">Email</label>
      <input 
        type="email" 
        id="email" 
        formControlName="email" 
        placeholder="Enter your email" 
        class="form-control" 
        [ngClass]="{'is-invalid': submitted && loginForm.controls.email.errors}"
      />
      <div *ngIf="submitted && loginForm.controls.email.errors" class="invalid-feedback">
        <div *ngIf="loginForm.controls.email.errors.required">Email is required.</div>
        <div *ngIf="loginForm.controls.email.errors.email">Invalid email format.</div>
      </div>
    </div>
    
    <div class="form-group">
      <label for="password">Password</label>
      <input 
        type="password" 
        id="password" 
        formControlName="password" 
        placeholder="Enter your password" 
        class="form-control" 
        [ngClass]="{'is-invalid': submitted && loginForm.controls.password.errors}"
      />
      <div *ngIf="submitted && loginForm.controls.password.errors" class="invalid-feedback">
        <div *ngIf="loginForm.controls.password.errors.required">Password is required.</div>
        <div *ngIf="loginForm.controls.password.errors.minlength">
          Password must be at least 6 characters.
        </div>
      </div>
    </div>
    
    <button type="submit" class="btn btn-primary" [disabled]="loading">Login</button>
    <div *ngIf="errorMessage" class="text-danger mt-2">{{ errorMessage }}</div>
  </form>
</div>
```

**`login.component.ts`**
```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }
}
```

---

### **2. Register Component**

#### **Generate Register Component**
Run the following Angular CLI command to generate a register component:  
```bash
ng generate component features/auth/register
```

#### **Code: Register Component**

**`register.component.html`**
```html
<div class="register-container">
  <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
    <h2>Register</h2>
    
    <div class="form-group">
      <label for="name">Full Name</label>
      <input 
        type="text" 
        id="name" 
        formControlName="name" 
        placeholder="Enter your full name" 
        class="form-control" 
        [ngClass]="{'is-invalid': submitted && registerForm.controls.name.errors}"
      />
      <div *ngIf="submitted && registerForm.controls.name.errors" class="invalid-feedback">
        <div *ngIf="registerForm.controls.name.errors.required">Name is required.</div>
      </div>
    </div>
    
    <div class="form-group">
      <label for="email">Email</label>
      <input 
        type="email" 
        id="email" 
        formControlName="email" 
        placeholder="Enter your email" 
        class="form-control" 
        [ngClass]="{'is-invalid': submitted && registerForm.controls.email.errors}"
      />
      <div *ngIf="submitted && registerForm.controls.email.errors" class="invalid-feedback">
        <div *ngIf="registerForm.controls.email.errors.required">Email is required.</div>
        <div *ngIf="registerForm.controls.email.errors.email">Invalid email format.</div>
      </div>
    </div>
    
    <div class="form-group">
      <label for="password">Password</label>
      <input 
        type="password" 
        id="password" 
        formControlName="password" 
        placeholder="Create a password" 
        class="form-control" 
        [ngClass]="{'is-invalid': submitted && registerForm.controls.password.errors}"
      />
      <div *ngIf="submitted && registerForm.controls.password.errors" class="invalid-feedback">
        <div *ngIf="registerForm.controls.password.errors.required">Password is required.</div>
        <div *ngIf="registerForm.controls.password.errors.minlength">
          Password must be at least 6 characters.
        </div>
      </div>
    </div>

    <button type="submit" class="btn btn-primary" [disabled]="loading">Register</button>
    <div *ngIf="errorMessage" class="text-danger mt-2">{{ errorMessage }}</div>
  </form>
</div>
```

**`register.component.ts`**
```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    const { name, email, password } = this.registerForm.value;

    this.authService.register({ name, email, password }).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }
}
```

---

### **3. AuthService**

Ensure you have a service (`auth.service.ts`) for handling API calls for login and registration.

**`auth.service.ts`**
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }

  register(data: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }
}
```

---

### **4. Styling**
Use a CSS framework like **DaisyUI** or **Bootstrap** for better design.

---

### **5. Routing**
Update `app-routing.module.ts` to include routes for login and register:
```typescript
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
```

---

This implementation provides fully functional login and register forms with form validation and API interaction. Let me know if you'd like me to assist further!