// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // <-- Залиш тільки це

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // <-- і тут
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }