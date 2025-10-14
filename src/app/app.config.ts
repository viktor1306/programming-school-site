// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router'; // <-- 1. Імпортуй provideRouter

import { routes } from './app.routes'; // <-- 2. Імпортуй свої роути

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)] // <-- 3. Додай це в масив providers
};