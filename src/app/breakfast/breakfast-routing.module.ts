import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{BreakfastListComponent} from './breakfast-list/breakfast-list.component';
const routes: Routes = [
  {
    path:'',
    component:BreakfastListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreakfastRoutingModule { }
