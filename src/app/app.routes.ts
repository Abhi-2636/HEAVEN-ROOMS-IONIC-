import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    loadComponent: () => import('./landing/landing.page').then( m => m.LandingPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'room-detail/:id',
    loadComponent: () => import('./pages/room-detail/room-detail.page').then( m => m.RoomDetailPage)
  },
  // NEW ROUTE FOR EDIT PROFILE
  {
    path: 'edit-profile',
    loadComponent: () => import('./pages/edit-profile/edit-profile.page').then( m => m.EditProfilePage)
  },
];