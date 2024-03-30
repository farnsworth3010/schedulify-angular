import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./modules/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./modules/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'schedule/:id',
    loadComponent: () =>
      import('./modules/schedule/schedule.component').then(
        (m) => m.ScheduleComponent
      ),
  },
  {
    path: '**',
    loadComponent: () => import('./modules/error/error.component').then((m)=>m.ErrorComponent)
  },
  {
    path: '404',
    loadComponent: () => import('./modules/error/error.component').then((m)=>m.ErrorComponent)
  }
];
