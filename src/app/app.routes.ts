import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    { 
        path: '',
        component: HomeComponent
    },
    { 
        path: 'products', 
        loadComponent: () => 
            import('./features/products/product-list/product-list.component')
            .then(m => m.ProductListComponent) 
    },
    { 
        path: 'product/:id', 
        loadComponent: () => 
            import('./features/products/product-detail/product-detail.component')
            .then(m => m.ProductDetailComponent) 
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
