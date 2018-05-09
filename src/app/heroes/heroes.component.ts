import { Component, OnInit } from '@angular/core';
import {HEROES} from '../model/mock-heroes';
import {Hero} from '../model/hero';
import {HeroService} from '../service/hero-service/hero.service';
import {MessageService} from '../service/message-service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,
              private messageService: MessageService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero) {
    this.messageService.add('Hero Component: ' + hero.name + ' Selected');
    this.selectedHero = hero;
  }

}
