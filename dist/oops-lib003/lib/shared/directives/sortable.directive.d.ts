import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare type SortDirection = 'asc' | 'desc' | '';
export interface SortEvent {
    column: string;
    direction: SortDirection;
}
export declare class SortableHeaderDirectiveLib003 {
    sortable: string;
    direction: SortDirection;
    sort: EventEmitter<SortEvent>;
    rotate(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SortableHeaderDirectiveLib003, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SortableHeaderDirectiveLib003, "th[sortable]", never, { "sortable": "sortable"; "direction": "direction"; }, { "sort": "sort"; }, never, never, false>;
}
