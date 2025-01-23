import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ArticleDetailComponent } from './features/articles/article-detail/article-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent
    },
    // { path: '**', component: PageNotFoundComponent },
    {
        path: 'journals',
        loadComponent: () =>
            import('./features/journals/journal-list/journal-list.component')
                .then(m => m.JournalListComponent)
    },
    {
        path: 'journals/:journalId',
        loadComponent: () =>
            import('./features/journals/journal-detail/journal-detail.component')
                .then(m => m.JournalDetailComponent)
    },
    {
        path: 'articles',
        loadComponent: () =>
            import('./features/articles/article-list/article-list.component')
                .then(m => m.ArticleListComponent)
    },
    {
        path: 'articles/:articleId',
        loadComponent: () =>
            import('./features/articles/article-detail/article-detail.component')
                .then(m => m.ArticleDetailComponent)
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
    }
    
];
