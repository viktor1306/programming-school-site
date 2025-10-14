import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Обов'язково додай імпорт!

interface Review {
  name: string;
  text: string;
  imageUrl: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule], // <-- і тут також
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews: Review[] = [
    {
      name: 'Александра Ігнатюк',
      text: 'Антон в захваті та ми теж. Він старається та намагається зрозуміти навіть теорію, нові терміни. Головне, що процес навчання приносить йому насолоду.',
      imageUrl: '/assets/placeholder.png'
    },
    {
      name: 'Олеся Кулік',
      text: 'Дякую! Я вважаю, що такі курси - золото, особливо для хлопчиків. А то дійсно раніше тільки залипав у Ютубі. Зараз - інша справа.',
      imageUrl: '/assets/placeholder.png'
    },
    {
      name: 'Тетяна Демчук',
      text: 'Глібу все дуже подобається. Ось, що він зараз каже: "прикольно, пізнавально, цікаво!"',
      imageUrl: '/assets/placeholder.png'
    },
    {
      name: 'Галина',
      text: 'Ніколасу подобається! У вільний час сидить у програмі, намагається щось сам зробити. Бачу у нього цікавість.',
      imageUrl: '/assets/placeholder.png'
    }
  ];
}