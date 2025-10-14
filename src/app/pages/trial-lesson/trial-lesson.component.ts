import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trial-lesson',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trial-lesson.component.html',
  styleUrls: ['./trial-lesson.component.css']
})
export class TrialLessonComponent {
  @ViewChild('selectWrapper') selectWrapper!: ElementRef;
  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('phoneInput') phoneInput!: ElementRef<HTMLInputElement>;

  isOpen = false;
  selectedCourse: string = 'Оберіть курс зі списку';
  courses = ["Консультація", "Scratch", "Python", "Web", "Digital ART", "Java", "Blender 3D", "Штучний інтелект", "КГ Junior", "КГ PRO", "Математика"];

  isSubmitting = false;
  submitMessage = '';

  constructor(private http: HttpClient) {}

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (this.isOpen && !this.selectWrapper.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  toggleDropdown() { this.isOpen = !this.isOpen; }
  selectCourse(course: string) {
    this.selectedCourse = course;
    this.isOpen = false;
  }

  onSubmit() {
    const name = this.nameInput.nativeElement.value;
    const phone = this.phoneInput.nativeElement.value;
    const course = this.selectedCourse;

    if (!name || !phone || course === 'Оберіть курс зі списку') {
      alert('Будь ласка, заповніть всі поля!');
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    // Це спеціальний шлях до нашої функції на Netlify
    const functionUrl = '/.netlify/functions/send-telegram';

    this.http.post(functionUrl, { name, phone, course }).subscribe({
      next: () => {
        this.submitMessage = 'Дякуємо! Ваша заявка відправлена.';
        this.nameInput.nativeElement.value = '';
        this.phoneInput.nativeElement.value = '';
        this.selectedCourse = 'Оберіть курс зі списку';
        this.isSubmitting = false;
      },
      error: () => {
        this.submitMessage = 'Сталася помилка. Спробуйте ще раз.';
        this.isSubmitting = false;
      }
    });
  }
}