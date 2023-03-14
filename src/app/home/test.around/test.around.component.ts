import { Component, OnDestroy, OnInit } from '@angular/core';
import { CarDataService } from 'oops-lib002';
import { INSTITUTIONS } from 'projects/oops-lib003/src/lib/shared/data/insts.data';
import { Institution } from 'projects/oops-lib003/src/lib/shared/models';
import { map, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-test-around',
  templateUrl: './test.around.component.html',
  styleUrls: ['./test.around.component.scss'],
})
export class TestAroundComponent implements OnInit, OnDestroy {
  private COMPONENT_NAME = 'TestAroundComponent';

  private onDestroy$: Subject<boolean> = new Subject();

  insts$: Observable<Institution[]>;
  filteredInsts$: Observable<Institution[]>;
  previousScrollTop: number = 0;

  options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  selectedOption = '1';
  showingNumberOption = '1';
  numberWithOption = 0;

  constructor(private carDataService: CarDataService) {}
  ngOnInit() {
    this.insts$ = of(INSTITUTIONS).pipe(
      map((items) => {
        // if triggering load from backend according to selected option, then set showingNumberOption
        this.showingNumberOption = '1'; // change to other option value if loading is based on option selection
        this.numberWithOption = items.length;
        return items;
      })
    );

    this.filteredInsts$ = of(INSTITUTIONS).pipe(
      map((items) => {
        return items.filter((item) => {
          return item.cuid.toLowerCase().includes('rbcd');
          // return item.englishName.toLowerCase().indexOf('ops') >= 0;
        });
      })
    );
  }

  onSelectOptionChange(option) {
    console.log('select ----------- ', option);
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
