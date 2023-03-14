import { Observable } from 'rxjs';
import { HeroLib003 } from '../models';
import * as i0 from "@angular/core";
export declare class HeroServiceLib003 {
    delayMs: number;
    getHeroes(): Observable<HeroLib003[]>;
    updateHero(hero: HeroLib003): Observable<HeroLib003>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeroServiceLib003, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HeroServiceLib003>;
}
