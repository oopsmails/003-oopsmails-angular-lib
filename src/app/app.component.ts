import { Component, OnInit } from '@angular/core';
import { CountryDataServiceLib003, UserLib003 } from 'oops-lib003';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = '003-oopsmails-angular-lib';

  users$: Observable<UserLib003[]>;

  constructor(private countryDataServiceLib003: CountryDataServiceLib003) {}

  ngOnInit() {
    this.countryDataServiceLib003.countries$;
  }
}
