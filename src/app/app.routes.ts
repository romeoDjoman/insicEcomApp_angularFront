import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { authGuard } from './core/guards/auth.guard';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { AboutUsComponent } from './features/about-us/about-us.component';

console.log('Initializing application routes...');

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { log: console.log('Navigating to Home') } },
    { path: 'aboutus', component: AboutUsComponent, data: { log: console.log('Navigating to About us') } },
    { path: 'journals', loadComponent: () => { console.log('Loading Journal List Component'); return import('./features/journals/journal-list/journal-list.component').then(m => m.JournalListComponent); } },
    { path: 'journals/:journalId', loadComponent: () => { console.log('Loading Journal Detail Component'); return import('./features/journals/journal-detail/journal-detail.component').then(m => m.JournalDetailComponent); } },
    { path: 'articles', loadComponent: () => { console.log('Loading Article List Component'); return import('./features/articles/article-list/article-list.component').then(m => m.ArticleListComponent); } },
    { path: 'articles/:articleId', loadComponent: () => { console.log('Loading Article Detail Component'); return import('./features/articles/article-detail/article-detail.component').then(m => m.ArticleDetailComponent); } },
    { path: 'cart', loadComponent: () => { console.log('Loading Cart List Component'); return import('./features/cart/cart-list/cart-list.component').then(m => m.CartListComponent); } },
    { path: 'checkout', loadComponent: () => { console.log('Loading Checkout Component'); return import('./features/checkout/checkout.component').then(m => m.CheckoutComponent); } },
    { path: 'auth/login', loadComponent: () => { console.log('Loading Login Component'); return import('./features/auth/login/login.component').then(m => m.LoginComponent); } },
    { path: 'auth/register', loadComponent: () => { console.log('Loading Register Component'); return import('./features/auth/register/register.component').then(m => m.RegisterComponent); } },
    { path: 'submityourwork', loadComponent: () => { console.log('Loading SubmitYourWork Component'); return import('./features/submit-your-work/submit-your-work.component').then(m => m.SubmitYourWorkComponent); } },
    { path: 'dashboard', canActivate: [authGuard], loadComponent: () => { console.log('Loading Dashboard Component'); return import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent); } },
    { path: '**', component: PageNotFoundComponent, pathMatch: 'full', data: { log: console.log('Page Not Found') } }

];
