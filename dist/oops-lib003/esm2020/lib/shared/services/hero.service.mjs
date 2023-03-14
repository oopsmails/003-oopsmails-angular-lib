import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { heroes } from '../models';
import * as i0 from "@angular/core";
export class HeroServiceLib003 {
    constructor() {
        this.delayMs = 500;
    }
    // Fake server get; assume nothing can go wrong
    getHeroes() {
        return of(heroes).pipe(delay(this.delayMs)); // simulate latency with delay
    }
    // Fake server update; assume nothing can go wrong
    updateHero(hero) {
        const oldHero = heroes.find((h) => h.id === hero.id);
        const newHero = Object.assign(oldHero, hero); // Demo: mutate cached hero
        return of(newHero).pipe(delay(this.delayMs)); // simulate latency with delay
    }
}
HeroServiceLib003.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: HeroServiceLib003, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
HeroServiceLib003.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: HeroServiceLib003, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: HeroServiceLib003, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb29wcy1saWIwMDMvc3JjL2xpYi9zaGFyZWQvc2VydmljZXMvaGVyby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLE1BQU0sRUFBYyxNQUFNLFdBQVcsQ0FBQzs7QUFHL0MsTUFBTSxPQUFPLGlCQUFpQjtJQUQ5QjtRQUVFLFlBQU8sR0FBRyxHQUFHLENBQUM7S0FhZjtJQVhDLCtDQUErQztJQUMvQyxTQUFTO1FBQ1AsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLDhCQUE4QjtJQUM3RSxDQUFDO0lBRUQsa0RBQWtEO0lBQ2xELFVBQVUsQ0FBQyxJQUFnQjtRQUN6QixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjtRQUN6RSxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsOEJBQThCO0lBQzlFLENBQUM7OytHQWJVLGlCQUFpQjttSEFBakIsaUJBQWlCLGNBREosTUFBTTs0RkFDbkIsaUJBQWlCO2tCQUQ3QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZGVsYXksIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGhlcm9lcywgSGVyb0xpYjAwMyB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgSGVyb1NlcnZpY2VMaWIwMDMge1xyXG4gIGRlbGF5TXMgPSA1MDA7XHJcblxyXG4gIC8vIEZha2Ugc2VydmVyIGdldDsgYXNzdW1lIG5vdGhpbmcgY2FuIGdvIHdyb25nXHJcbiAgZ2V0SGVyb2VzKCk6IE9ic2VydmFibGU8SGVyb0xpYjAwM1tdPiB7XHJcbiAgICByZXR1cm4gb2YoaGVyb2VzKS5waXBlKGRlbGF5KHRoaXMuZGVsYXlNcykpOyAvLyBzaW11bGF0ZSBsYXRlbmN5IHdpdGggZGVsYXlcclxuICB9XHJcblxyXG4gIC8vIEZha2Ugc2VydmVyIHVwZGF0ZTsgYXNzdW1lIG5vdGhpbmcgY2FuIGdvIHdyb25nXHJcbiAgdXBkYXRlSGVybyhoZXJvOiBIZXJvTGliMDAzKTogT2JzZXJ2YWJsZTxIZXJvTGliMDAzPiB7XHJcbiAgICBjb25zdCBvbGRIZXJvID0gaGVyb2VzLmZpbmQoKGgpID0+IGguaWQgPT09IGhlcm8uaWQpO1xyXG4gICAgY29uc3QgbmV3SGVybyA9IE9iamVjdC5hc3NpZ24ob2xkSGVybywgaGVybyk7IC8vIERlbW86IG11dGF0ZSBjYWNoZWQgaGVyb1xyXG4gICAgcmV0dXJuIG9mKG5ld0hlcm8pLnBpcGUoZGVsYXkodGhpcy5kZWxheU1zKSk7IC8vIHNpbXVsYXRlIGxhdGVuY3kgd2l0aCBkZWxheVxyXG4gIH1cclxufVxyXG4iXX0=