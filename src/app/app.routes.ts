import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';

export const routes: Routes = [
  {
    path: '',
    component: Accueil,
    title: 'Boucherie-Épicerie La Méditerranéenne | Longueuil',
  },
  {
    path: 'rayons',
    loadComponent: () => import('./pages/rayons/rayons').then((m) => m.PageRayons),
    title: 'Nos rayons | La Méditerranéenne',
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./pages/a-propos/a-propos').then((m) => m.APropos),
    title: 'À propos | La Méditerranéenne',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Contact | La Méditerranéenne',
  },
];
