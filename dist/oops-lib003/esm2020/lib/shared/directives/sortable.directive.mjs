import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
const rotate = { asc: 'desc', desc: '', '': 'asc' };
export class SortableHeaderDirectiveLib003 {
    constructor() {
        this.direction = '';
        this.sort = new EventEmitter();
    }
    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    }
}
SortableHeaderDirectiveLib003.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SortableHeaderDirectiveLib003, deps: [], target: i0.ɵɵFactoryTarget.Directive });
SortableHeaderDirectiveLib003.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: SortableHeaderDirectiveLib003, selector: "th[sortable]", inputs: { sortable: "sortable", direction: "direction" }, outputs: { sort: "sort" }, host: { listeners: { "click": "rotate()" }, properties: { "class.asc": "direction === \"asc\"", "class.desc": "direction === \"desc\"" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SortableHeaderDirectiveLib003, decorators: [{
            type: Directive,
            args: [{
                    selector: 'th[sortable]',
                    host: {
                        '[class.asc]': 'direction === "asc"',
                        '[class.desc]': 'direction === "desc"',
                        '(click)': 'rotate()',
                    },
                }]
        }], propDecorators: { sortable: [{
                type: Input
            }], direction: [{
                type: Input
            }], sort: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb29wcy1saWIwMDMvc3JjL2xpYi9zaGFyZWQvZGlyZWN0aXZlcy9zb3J0YWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHdkUsTUFBTSxNQUFNLEdBQXFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztBQWV0RixNQUFNLE9BQU8sNkJBQTZCO0lBUjFDO1FBVVcsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFDN0IsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7S0FNaEQ7SUFKQyxNQUFNO1FBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7OzJIQVJVLDZCQUE2QjsrR0FBN0IsNkJBQTZCOzRGQUE3Qiw2QkFBNkI7a0JBUnpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLElBQUksRUFBRTt3QkFDSixhQUFhLEVBQUUscUJBQXFCO3dCQUNwQyxjQUFjLEVBQUUsc0JBQXNCO3dCQUN0QyxTQUFTLEVBQUUsVUFBVTtxQkFDdEI7aUJBQ0Y7OEJBRVUsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNJLElBQUk7c0JBQWIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgdHlwZSBTb3J0RGlyZWN0aW9uID0gJ2FzYycgfCAnZGVzYycgfCAnJztcclxuY29uc3Qgcm90YXRlOiB7IFtrZXk6IHN0cmluZ106IFNvcnREaXJlY3Rpb24gfSA9IHsgYXNjOiAnZGVzYycsIGRlc2M6ICcnLCAnJzogJ2FzYycgfTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU29ydEV2ZW50IHtcclxuICBjb2x1bW46IHN0cmluZztcclxuICBkaXJlY3Rpb246IFNvcnREaXJlY3Rpb247XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAndGhbc29ydGFibGVdJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFzY10nOiAnZGlyZWN0aW9uID09PSBcImFzY1wiJyxcclxuICAgICdbY2xhc3MuZGVzY10nOiAnZGlyZWN0aW9uID09PSBcImRlc2NcIicsXHJcbiAgICAnKGNsaWNrKSc6ICdyb3RhdGUoKScsXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlSGVhZGVyRGlyZWN0aXZlTGliMDAzIHtcclxuICBASW5wdXQoKSBzb3J0YWJsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogU29ydERpcmVjdGlvbiA9ICcnO1xyXG4gIEBPdXRwdXQoKSBzb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxTb3J0RXZlbnQ+KCk7XHJcblxyXG4gIHJvdGF0ZSgpIHtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gcm90YXRlW3RoaXMuZGlyZWN0aW9uXTtcclxuICAgIHRoaXMuc29ydC5lbWl0KHsgY29sdW1uOiB0aGlzLnNvcnRhYmxlLCBkaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=