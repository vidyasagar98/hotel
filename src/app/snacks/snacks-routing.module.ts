import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SnacksListComponent} from './snacks-list/snacks-list.component';

const routes: Routes = [
  {
    path:'',
    component:SnacksListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnacksRoutingModule { }
