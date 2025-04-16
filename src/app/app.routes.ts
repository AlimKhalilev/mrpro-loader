import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'demo', loadComponent: () => import('./pages/demo-page/demo-page.component').then(m => m.DemoPageComponent)},
    { path: '', loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent)},
    { path: '**', redirectTo: '' }
];
