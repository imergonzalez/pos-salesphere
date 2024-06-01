import { Routes } from '@angular/router';
import { HomeComponent, LoginComponent } from './pages';
import { AuthGuardService } from './guards/auth-guard.service';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent, canActivate: [AuthGuardService]}
];