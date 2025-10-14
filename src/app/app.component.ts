// src/app/app.component.ts

import { Component } from '@angular/core';

// 1. Імпортуємо всі твої компоненти
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { CoursesComponent } from './components/courses/courses.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Додаємо їх в масив imports, щоб AppComponent "знав" про них
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    CoursesComponent,
    WhyUsComponent,
    ReviewsComponent,
    ContactFormComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title можна видалити, він більше не потрібен
}