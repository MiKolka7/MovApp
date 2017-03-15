
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { popRoutes } from './popular/popular.routes';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/pops',
    pathMatch: 'full'
  },
  ...popRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
