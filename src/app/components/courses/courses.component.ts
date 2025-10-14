import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Course {
  title: string;
  description: string;
  age: string;
  imageUrl: string;
}

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses: Course[] = [
    {
      title: 'Scratch',
      description: 'Мова Scratch - створення ігр та мультиків',
      age: '7-11 років',
      imageUrl: '/assets/placeholder.png'
    },
    {
      title: 'Python',
      description: 'Написання ігор, додатків, ботів, сайтів',
      age: '12-17 років',
      imageUrl: '/assets/placeholder.png'
    },
    {
      title: 'Minecraft',
      description: 'Знайомство зі світом IT за допомогою ігрового середовища',
      age: '8-16 років',
      imageUrl: '/assets/placeholder.png'
    },
    {
      title: 'WEB-розробка',
      description: 'Написання сайтів (HTML, CSS, JavaScript)',
      age: '12-17 років',
      imageUrl: '/assets/placeholder.png'
    }
    // Додай сюди інші курси за аналогією
  ];
}