import { Component, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-trial-lesson',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './trial-lesson.component.html',
  styleUrls: ['./trial-lesson.component.css']
})
export class TrialLessonComponent implements OnInit {
  @ViewChild('selectWrapper') selectWrapper!: ElementRef;
  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('phoneInput') phoneInput!: ElementRef<HTMLInputElement>;

  isOpen = false;
  selectedCourse = 'Оберіть курс зі списку';
  courses = [
    "Консультація", "Scratch", "Python", "Web", "Digital ART",
    "Java", "Blender 3D", "Штучний інтелект", "КГ Junior",
    "КГ PRO", "Математика"
  ];

  isSubmitting = false;
  submitMessage = '';

  private botToken = '';
  private chatId = '';
  private telegramApiUrl = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/config.json').subscribe({
      next: (config) => {
        this.botToken = config.telegramBotToken;
        this.chatId = config.telegramChatId;
        this.telegramApiUrl = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
      },
      error: () => {
        console.error('⚠️ Не вдалося завантажити config.json');
      }
    });
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (this.isOpen && !this.selectWrapper.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  toggleDropdown() { this.isOpen = !this.isOpen; }

  selectCourse(course: string, event: MouseEvent) {
    event.stopPropagation();
    this.selectedCourse = course;
    this.isOpen = false;
  }

  onSubmit() {
    const name = this.nameInput.nativeElement.value.trim();
    const phone = this.phoneInput.nativeElement.value.trim();
    const course = this.selectedCourse;

    if (!name || !phone || course === 'Оберіть курс зі списку') {
      this.submitMessage = 'Будь ласка, заповніть всі поля!';
      setTimeout(() => this.submitMessage = '', 3000);
      return;
    }

    if (!this.botToken || !this.chatId) {
      this.submitMessage = '⚠️ Немає доступу до Telegram API (config.json не знайдено).';
      setTimeout(() => this.submitMessage = '', 4000);
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = 'Відправка...';

    const message = `
📩 *Нова заявка з сайту:*

👤 Ім'я: ${name}
📞 Телефон: ${phone}
📘 Курс: ${course}
    `;

    this.http.post(this.telegramApiUrl, {
      chat_id: this.chatId,
      text: message,
      parse_mode: 'Markdown'
    }).subscribe({
      next: () => {
        this.submitMessage = '✅ Дякуємо! Ваша заявка отримана.';
        this.isSubmitting = false;
        this.nameInput.nativeElement.value = '';
        this.phoneInput.nativeElement.value = '';
        this.selectedCourse = 'Оберіть курс зі списку';
        setTimeout(() => this.submitMessage = '', 5000);
      },
      error: (err) => {
        console.error('Помилка при відправці:', err);
        this.submitMessage = '❌ Помилка при відправці. Спробуйте ще раз.';
        this.isSubmitting = false;
        setTimeout(() => this.submitMessage = '', 5000);
      }
    });
  }
}
