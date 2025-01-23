import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user-management-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'assets/data/user-data.json';
  // private baseUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/auth/login`, { email, password });
  }

  register(data: { email: string, password: string }): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/auth/register`, data);
  }
}
