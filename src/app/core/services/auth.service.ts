import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user-data-model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; // L'URL de l'API pour récupérer les utilisateurs

  constructor(private http: HttpClient, private router: Router) { }

  // Méthode de connexion
  login(email: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          const user = users[0];
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user); // Mettre à jour l'état global
          return user;
        }
        return null;
      })
    );
  }
  

  private userSubject = new BehaviorSubject<User | null>(this.getUser());
  user$ = this.userSubject.asObservable(); // Observable pour le rôle utilisateur

  // Méthode d'inscription
  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // Récupérer l'utilisateur connecté
  getUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Vérifier si l'utilisateur est Admin
  isAdmin(): boolean {
    const user = this.getUser();
    return user?.role.name === 'Admin';
  }

  isAuthor(): boolean {
    const user = this.getUser();
    return user?.role.name === 'Author'
  }

  isClient(): boolean {
    const user = this.getUser();
    return user?.role.name === 'Client'
  }

  // Déconnexion de l'utilisateur
  logout(): void {
    localStorage.removeItem('user');
    this.userSubject.next(null); // Réinitialiser l'état utilisateur
    this.router.navigate(['/home']); // Redirection après déconnexion
  } 
  
}
