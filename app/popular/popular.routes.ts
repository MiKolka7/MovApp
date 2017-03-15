import { Routes } from '@angular/router';

import { PopListComponent } from './popular-list.component';
import { PopDetailsComponent } from './popular-details.component';

// Route Configuration
export const popRoutes: Routes = [
  { path: 'pops', component: PopListComponent },
  { path: 'pops/:id', component: PopDetailsComponent }
];