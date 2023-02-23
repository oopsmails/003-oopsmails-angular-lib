import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { heroes, HeroLib003 } from '../models';

@Injectable({ providedIn: 'root' })
export class HeroServiceLib003 {
  delayMs = 500;

  // Fake server get; assume nothing can go wrong
  getHeroes(): Observable<HeroLib003[]> {
    return of(heroes).pipe(delay(this.delayMs)); // simulate latency with delay
  }

  // Fake server update; assume nothing can go wrong
  updateHero(hero: HeroLib003): Observable<HeroLib003> {
    const oldHero = heroes.find((h) => h.id === hero.id);
    const newHero = Object.assign(oldHero, hero); // Demo: mutate cached hero
    return of(newHero).pipe(delay(this.delayMs)); // simulate latency with delay
  }
}
