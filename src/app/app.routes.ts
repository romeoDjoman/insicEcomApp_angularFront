import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    { 
        path: '',
        component: HomeComponent
    },
    { 
        path: 'journals', 
        loadComponent: () => 
            import('./features/journals/journal-list/journal-list.component')
            .then(m => m.JournalListComponent) 
    },
    { 
        path: 'journal/:id', 
        loadComponent: () => 
            import('./features/journals/journal-detail/journal-detail.component')
            .then(m => m.JournalDetailComponent) 
    },
    { 
        path: 'cart', 
        loadComponent: () => 
            import('./features/cart/cart.component')
            .then(m => m.CartComponent) 
    },
    { 
        path: 'checkout', 
        loadComponent: () => 
            import('./features/checkout/checkout.component')
            .then(m => m.CheckoutComponent) 
    },
    { 
        path: 'auth/login', 
        loadComponent: () => 
            import('./features/auth/login/login.component')
            .then(m => m.LoginComponent) 
    },
    { 
        path: 'auth/register', 
        loadComponent: () => 
            import('./features/auth/register/register.component')
            .then(m => m.RegisterComponent) 
    },
    { 
        path: '**', 
        redirectTo: '' 
    }
];
