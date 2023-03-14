import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NotFoundComponent, OopsLib002Module, SharedModule } from 'oops-lib002';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OopsLib002Module,
    SharedModule,
    HomeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DecimalPipe], // need DecimalPipe for shared lib?? then to be removed!!!
  bootstrap: [AppComponent],
})
export class AppModule {}
