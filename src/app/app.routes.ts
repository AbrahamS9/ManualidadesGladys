import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'pagina',
    pathMatch: 'full',
  },
  {
    path: 'pagina',
    loadComponent: () => import('./pagina/pagina.page').then( m => m.PaginaPage)
  },
  {
    path: 'vermas',
    loadComponent: () => import('./pagina/vermas/vermas.page').then( m => m.VermasPage)
  },
  
];
