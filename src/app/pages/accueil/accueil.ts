import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { Rayons } from '../../sections/rayons/rayons';
import { Incontournables } from '../../sections/incontournables/incontournables';
import { Avis } from '../../sections/avis/avis';
import { Infos } from '../../sections/infos/infos';

@Component({
  selector: 'app-accueil',
  imports: [Hero, Rayons, Incontournables, Avis, Infos],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {

}
