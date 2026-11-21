
import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Hero } from './sections/hero/hero';
import { Rayons } from './sections/rayons/rayons';
import { Incontournables } from './sections/incontournables/incontournables';
import { Avis } from './sections/avis/avis';
import { Infos } from './sections/infos/infos';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Hero, Header, Rayons, Incontournables, Avis, Infos, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('la-mediterraneenne');
}
