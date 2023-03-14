import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAroundComponent } from './test.around/test.around.component';
import { OopsLib002Module, SharedModule } from 'oops-lib002';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, TestAroundComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    OopsLib002Module,
    SharedModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
