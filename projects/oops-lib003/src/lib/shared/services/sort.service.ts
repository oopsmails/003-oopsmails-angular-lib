import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ColumnSortedEventLib003 } from '../models';

@Injectable()
export class SortServiceLib003 {
  constructor() {}

  private columnSortedSource = new Subject<ColumnSortedEventLib003>();

  columnSorted$ = this.columnSortedSource.asObservable();

  columnSorted(event: ColumnSortedEventLib003) {
    this.columnSortedSource.next(event);
  }
}
