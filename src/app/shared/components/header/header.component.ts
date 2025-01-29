import { Component, OnInit } from '@angular/core';
import { Router, RouterLink} from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LoginComponent } from '../../../features/auth/login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ 
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isAdmin = false; // Variable pour suivre si l'utilisateur est admin

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.isAdmin = user?.role.name === 'Admin';
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']); // Redirection après déconnexion
  }

}
