import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{RiceListComponent} from './rice-list/rice-list.component';
const routes: Routes = [
  {
    path:'',
    component:RiceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiceRoutingModule { }
