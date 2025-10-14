import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Всі твої старі компоненти
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { CoursesComponent } from '../../components/courses/courses.component';
import { WhyUsComponent } from '../../components/why-us/why-us.component';
import { ReviewsComponent } from '../../components/reviews/reviews.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  // Ось сюди вставляємо всі імпорти
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
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }