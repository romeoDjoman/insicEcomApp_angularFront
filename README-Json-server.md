# Mettre en place une API simulée avec JSON Server
- Permet de simuler des requêtes POST sur un fichier Json - Utile pour les login et register. 

---

### Étape 1 : Installer JSON Server

JSON Server est un outil qui permet de transformer rapidement un fichier JSON en une API REST complète.

#### Commande pour installer JSON Server globalement :
```bash
npm install -g json-server
```

#### Alternative : Installer localement dans votre projet :
Si vous préférez l'installer uniquement dans votre projet Angular, exécutez :
```bash
npm install json-server --save-dev
```

---

### Étape 2 : Configurer le fichier JSON pour JSON Server

1. Placez votre fichier `user-data.json` dans le dossier `src/assets/data` (ou un autre dossier de votre choix).
   - Ce fichier contient vos utilisateurs avec leurs informations, comme indiqué dans votre exemple.

2. Exemple de contenu du fichier `src/assets/data/user-data.json` :
   ```json
   {
     "users": [
       {
         "id": 1,
         "email": "john.doe@example.com",
         "password": "hashedpassword123",
         "name": "John Doe",
         "role": "Client"
       },
       {
         "id": 2,
         "email": "jane.doe@example.com",
         "password": "hashedpassword456",
         "name": "Jane Doe",
         "role": "Client"
       }
     ]
   }
   ```

---

### Étape 3 : Configurer les routes pour JSON Server

Créez un fichier `routes.json` dans le même dossier que `user-data.json` (par exemple, dans `src/assets/data`). Ce fichier permettra de personnaliser les endpoints générés par JSON Server.

#### Contenu de `src/assets/data/routes.json` :
```json
{
  "/auth/login": "/users"
}
```

---

### Étape 4 : Ajouter un script pour démarrer JSON Server

Ajoutez un script dans le fichier `package.json` pour démarrer JSON Server avec votre configuration :

#### Exemple de script dans `package.json` :
```json
"scripts": {
  "start:api": "json-server --watch src/assets/data/user-data.json --routes src/assets/data/routes.json --port 3000"
}
```
En réali

Cela lance un serveur JSON accessible à l'adresse `http://localhost:3000`.

---

### Étape 5 : Lancer JSON Server

Exécutez la commande suivante pour démarrer JSON Server :
```bash
npm run start:api
```

- JSON Server démarrera et exposera les endpoints suivants :
  - `GET /users` : Liste de tous les utilisateurs.
  - `POST /auth/login` : Simule un login en POST.
  - `GET /users/1` : Détails de l'utilisateur avec l'ID 1.

---

### Étape 6 : Modifier le service `AuthService`

Modifiez le service `AuthService` pour utiliser l'URL de l'API simulée (par exemple, `http://localhost:3000`).

#### Exemple corrigé de `AuthService` :
```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth/login'; // URL exposée par JSON Server

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password });
  }
}
```

---

### Étape 7 : Gérer la logique côté API simulée

JSON Server ne supporte pas la logique métier. Pour simuler une authentification, vous pouvez utiliser des middlewares ou traiter la logique dans votre composant Angular.

#### Exemple : Gérer la logique côté Angular
Ajoutez une vérification après avoir reçu les données de JSON Server pour vérifier que les informations d'identification sont valides.

Dans votre `LoginComponent` :
```typescript
onSubmit(): void {
  this.submitted = true;

  if (this.loginForm.invalid) {
    return;
  }

  this.loading = true;
  const { email, password } = this.loginForm.value;

  this.authService.login(email, password).subscribe({
    next: (users) => {
      const user = users.find((u: any) => u.email === email && u.password === password);
      if (user) {
        console.log('Login successful:', user);
        this.router.navigate(['/']);
      } else {
        this.errorMessage = 'Invalid email or password.';
      }
      this.loading = false;
    },
    error: (err) => {
      console.error('Login error:', err.message);
      this.errorMessage = 'An error occurred.';
      this.loading = false;
    }
  });
}
```

---

### Étape 8 : Tester votre application

1. Démarrez JSON Server :
   ```bash
   npm run start:api
   ```

2. Lancez votre application Angular :
   ```bash
   ng serve
   ```

3. Testez la connexion dans le formulaire avec les informations d'identification dans le fichier JSON (`email` et `password`).

---

### Résultat attendu

1. Si les informations d'identification sont correctes, l'utilisateur sera authentifié avec succès, et vous pourrez naviguer vers une autre page.
2. Si les informations sont incorrectes, un message d'erreur s'affichera, par exemple : **"Invalid email or password."**

---

### Avantages de cette solution

1. **Facilité de mise en œuvre** : Pas besoin de backend complexe, juste un fichier JSON et JSON Server.
2. **Flexibilité** : Vous pouvez ajouter ou modifier des données directement dans le fichier JSON.
3. **API REST complète** : Vous obtenez automatiquement des endpoints pour `GET`, `POST`, `PUT`, et `DELETE`.

Avec cette méthode, vous avez une API fonctionnelle pour simuler l'authentification et tester votre frontend efficacement. 😊