import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SortableHeaderDirectiveLib003 } from './directives/sortable.directive';
import { LoaderServiceLib003 } from './services/loader.service';

@NgModule({
  declarations: [SortableHeaderDirectiveLib003],
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  exports: [SortableHeaderDirectiveLib003],
  providers: [LoaderServiceLib003],
})
export class SharedModule {}
