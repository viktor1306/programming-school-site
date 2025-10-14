import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <-- Імпортуй RouterLink

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink], // <-- Додай його сюди
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { }