import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'getting-started', loadChildren: 'app/getting-started/getting-started.module#GettingStartedModule' },
];
