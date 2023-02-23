export interface ColumnHeaderLib003 {
  column: any;
  direction: SortDirectionLib003;
}

export enum SortDirectionLib003 {
  Asc = 'asc',
  Desc = 'desc',
  Default = 'default',
}

export interface ColumnSortedEventLib003 {
  column: any;
  direction: SortDirectionLib003;
}
