import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DiabeticListComponent} from './diabetic-list/diabetic-list.component';

const routes: Routes = [
  {
    path:'',
    component:DiabeticListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiabeticRoutingModule { }
