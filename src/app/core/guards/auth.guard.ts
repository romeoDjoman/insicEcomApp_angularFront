import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // 💡 Instanciation correcte du service
  const router = inject(Router);

  const user = authService.getUser(); // ✅ Appel correct de getUser()

 
  if (user?.role.name === 'Admin') {
    return true; // Accès autorisé pour les Admins
  } else {
    router.navigate(['/auth/login']);
    return false; // Redirection si l'utilisateur n'est pas Admin
  }
};
