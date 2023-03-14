import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { BehaviorSubject, Subject, of, delay as delay$1 } from 'rxjs';
import { tap, debounceTime, switchMap, delay } from 'rxjs/operators';
import * as i1 from '@angular/common';

class OopsLib003Service {
    constructor() { }
}
OopsLib003Service.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib003Service, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
OopsLib003Service.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib003Service, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib003Service, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class OopsLib003Component {
    constructor() { }
    ngOnInit() {
    }
}
OopsLib003Component.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib003Component, deps: [], target: i0.ɵɵFactoryTarget.Component });
OopsLib003Component.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: OopsLib003Component, selector: "oopslib003-oops-lib003", ngImport: i0, template: `
    <p>
      oops-lib003 works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib003Component, decorators: [{
            type: Component,
            args: [{ selector: 'oopslib003-oops-lib003', template: `
    <p>
      oops-lib003 works!
    </p>
  ` }]
        }], ctorParameters: function () { return []; } });

class OopsLib003Module {
}
OopsLib003Module.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib003Module, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OopsLib003Module.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: OopsLib003Module, declarations: [OopsLib003Component], exports: [OopsLib003Component] });
OopsLib003Module.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib003Module });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib003Module, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        OopsLib003Component
                    ],
                    imports: [],
                    exports: [
                        OopsLib003Component
                    ]
                }]
        }] });

const COUNTRIES = [
    {
        id: 1,
        name: 'Russia',
        flag: 'f/f3/Flag_of_Russia.svg',
        area: 17075200,
        population: 146989754,
    },
    {
        id: 2,
        name: 'France',
        flag: 'c/c3/Flag_of_France.svg',
        area: 640679,
        population: 64979548,
    },
    {
        id: 3,
        name: 'Germany',
        flag: 'b/ba/Flag_of_Germany.svg',
        area: 357114,
        population: 82114224,
    },
    {
        id: 4,
        name: 'Portugal',
        flag: '5/5c/Flag_of_Portugal.svg',
        area: 92090,
        population: 10329506,
    },
    {
        id: 5,
        name: 'Canada',
        flag: 'c/cf/Flag_of_Canada.svg',
        area: 9976140,
        population: 36624199,
    },
    {
        id: 6,
        name: 'Vietnam',
        flag: '2/21/Flag_of_Vietnam.svg',
        area: 331212,
        population: 95540800,
    },
    {
        id: 7,
        name: 'Brazil',
        flag: '0/05/Flag_of_Brazil.svg',
        area: 8515767,
        population: 209288278,
    },
    {
        id: 8,
        name: 'Mexico',
        flag: 'f/fc/Flag_of_Mexico.svg',
        area: 1964375,
        population: 129163276,
    },
    {
        id: 9,
        name: 'United States',
        flag: 'a/a4/Flag_of_the_United_States.svg',
        area: 9629091,
        population: 324459463,
    },
    {
        id: 10,
        name: 'India',
        flag: '4/41/Flag_of_India.svg',
        area: 3287263,
        population: 1324171354,
    },
    {
        id: 11,
        name: 'Indonesia',
        flag: '9/9f/Flag_of_Indonesia.svg',
        area: 1910931,
        population: 263991379,
    },
    {
        id: 12,
        name: 'Tuvalu',
        flag: '3/38/Flag_of_Tuvalu.svg',
        area: 26,
        population: 11097,
    },
    {
        id: 13,
        name: 'China',
        flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
        area: 9596960,
        population: 1409517397,
    },
];

function compare(v1, v2) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
function sort(countries, column, direction) {
    if (direction === '') {
        return countries;
    }
    else {
        return [...countries].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(CountryLib003, term, pipe) {
    return (CountryLib003.name.toLowerCase().includes(term) ||
        pipe.transform(CountryLib003.area).includes(term) ||
        pipe.transform(CountryLib003.population).includes(term));
}
class CountryDataServiceLib003 {
    constructor(pipe) {
        this.pipe = pipe;
        this.COMPONENT_NAME = 'CountryLib003DataService';
        this._loading$ = new BehaviorSubject(true);
        this._search$ = new Subject();
        this._countries$ = new BehaviorSubject([]);
        this._total$ = new BehaviorSubject(0);
        this._state = {
            page: 1,
            pageSize: 4,
            searchTerm: '',
            sortColumn: '',
            sortDirection: '',
        };
        this._search$
            .pipe(tap(() => this._loading$.next(true)), debounceTime(200), switchMap(() => this._search()), delay(200), tap(() => this._loading$.next(false)))
            .subscribe((result) => {
            this._countries$.next(result.countries);
            this._total$.next(result.total);
        });
        this._search$.next();
    }
    get countries$() {
        console.log(this.COMPONENT_NAME + ', calling get countries$ ..... ');
        return this._countries$.asObservable();
    }
    get total$() {
        return this._total$.asObservable();
    }
    get loading$() {
        return this._loading$.asObservable();
    }
    get page() {
        return this._state.page;
    }
    get pageSize() {
        return this._state.pageSize;
    }
    get searchTerm() {
        return this._state.searchTerm;
    }
    set page(page) {
        this._set({ page });
    }
    set pageSize(pageSize) {
        this._set({ pageSize });
    }
    set searchTerm(searchTerm) {
        this._set({ searchTerm });
    }
    set sortColumn(sortColumn) {
        this._set({ sortColumn });
    }
    set sortDirection(sortDirection) {
        this._set({ sortDirection });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let countries = sort(COUNTRIES, sortColumn, sortDirection);
        // 2. filter
        countries = countries.filter((CountryLib003) => matches(CountryLib003, searchTerm, this.pipe));
        const total = countries.length;
        // 3. paginate
        countries = countries.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return of({ countries, total });
    }
}
CountryDataServiceLib003.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CountryDataServiceLib003, deps: [{ token: i1.DecimalPipe }], target: i0.ɵɵFactoryTarget.Injectable });
CountryDataServiceLib003.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CountryDataServiceLib003, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CountryDataServiceLib003, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.DecimalPipe }]; } });

class HeroLib003 {
    constructor() {
        this.id = 0;
        this.name = '';
        this.addresses = [];
    }
}
class AddressLib003 {
    constructor() {
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}
const heroes = [
    {
        id: 1,
        name: 'Whirlwind',
        addresses: [
            { street: '123 Main', city: 'Anywhere', state: 'CA', zip: '94801' },
            { street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226' },
        ],
    },
    {
        id: 2,
        name: 'Bombastic',
        addresses: [{ street: '789 Elm', city: 'Smallville', state: 'OH', zip: '04501' }],
    },
    {
        id: 3,
        name: 'Magneta',
        addresses: [],
    },
];
const states = ['CA', 'MD', 'OH', 'VA'];

var SortDirectionLib003;
(function (SortDirectionLib003) {
    SortDirectionLib003["Asc"] = "asc";
    SortDirectionLib003["Desc"] = "desc";
    SortDirectionLib003["Default"] = "default";
})(SortDirectionLib003 || (SortDirectionLib003 = {}));

class Institution {
}

class HeroServiceLib003 {
    constructor() {
        this.delayMs = 500;
    }
    // Fake server get; assume nothing can go wrong
    getHeroes() {
        return of(heroes).pipe(delay$1(this.delayMs)); // simulate latency with delay
    }
    // Fake server update; assume nothing can go wrong
    updateHero(hero) {
        const oldHero = heroes.find((h) => h.id === hero.id);
        const newHero = Object.assign(oldHero, hero); // Demo: mutate cached hero
        return of(newHero).pipe(delay$1(this.delayMs)); // simulate latency with delay
    }
}
HeroServiceLib003.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: HeroServiceLib003, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
HeroServiceLib003.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: HeroServiceLib003, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: HeroServiceLib003, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

/*
 * Public API Surface of oops-lib003
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CountryDataServiceLib003, HeroServiceLib003, OopsLib003Component, OopsLib003Module, OopsLib003Service };
//# sourceMappingURL=oops-lib003.mjs.map
