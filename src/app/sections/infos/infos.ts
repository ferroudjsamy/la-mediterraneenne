import { Component, DestroyRef, inject, signal } from '@angular/core';

@Component({
  selector: 'app-infos',
  imports: [],
  templateUrl: './infos.html',
  styleUrl: './infos.css',
})
export class Infos {
  ouvert = signal(this.estOuvert());

  constructor() {
    const minuteur = setInterval(() => this.ouvert.set(this.estOuvert()), 60000);
    inject(DestroyRef).onDestroy(() => clearInterval(minuteur));
  }

  private estOuvert(): boolean {
    // Heure de Montréal, peu importe où est le visiteur
    const parties = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Toronto',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hourCycle: 'h23',
    }).formatToParts(new Date());

    const valeur = (type: string) => parties.find((p) => p.type === type)?.value ?? '';
    const jour = valeur('weekday');
    const minutes = Number(valeur('hour')) * 60 + Number(valeur('minute'));

    const weekend = jour === 'Sat' || jour === 'Sun';
    const fermeture = weekend ? 19 * 60 : 19 * 60 + 30;

    return minutes >= 9 * 60 && minutes < fermeture;
  }
}
