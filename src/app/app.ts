import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Hero } from './sections/hero/hero';
import { Rayons } from './sections/rayons/rayons';

@Component({
  selector: 'app-root',
  imports: [Hero, Header, Rayons],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('la-mediterraneenne');
}
