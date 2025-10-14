// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TrialLessonComponent } from './pages/trial-lesson/trial-lesson.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Головна сторінка
  { path: 'trial-lesson', component: TrialLessonComponent } // Нова сторінка з формою
];