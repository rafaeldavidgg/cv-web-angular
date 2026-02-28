import { Routes } from '@angular/router';
import { ExperienceComponent } from './features/experience.component/experience.component';

export const routes: Routes = [
  { path: 'experience', component: ExperienceComponent },
  // Redireccion por defecto para que al entrar cargue la experiencia
  { path: '', redirectTo: '/experience', pathMatch: 'full' }
];
