import { Injectable } from '@angular/core';
import { Hero } from './heroes/heroes.component';
import { HEROES } from './heroes/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes():Hero[]{
    return HEROES;
  }

  constructor() { }
}
