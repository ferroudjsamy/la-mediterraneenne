import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // menu mobile fermé au départ
  protected readonly menuOuvert = signal(false);

  protected basculerMenu() {
    this.menuOuvert.update((ouvert) => !ouvert);
  }

  protected fermerMenu() {
    this.menuOuvert.set(false);
  }
}
