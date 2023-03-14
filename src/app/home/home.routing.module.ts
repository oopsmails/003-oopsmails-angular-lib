import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'oops-lib002';
import { HomeComponent } from './home.component';
import { TestAroundComponent } from './test.around/test.around.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home/test-around', component: TestAroundComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
