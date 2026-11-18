import { Header } from './layout/header/header';
import { Component, signal } from '@angular/core';
import { Hero } from './sections/hero/hero';

@Component({
  selector: 'app-root',
  imports: [Hero, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('la-mediterraneenne');
}
