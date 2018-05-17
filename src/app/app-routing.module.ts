import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{BreakfastRoutingModule} from './breakfast/breakfast-routing.module';
import{SnacksRoutingModule} from './snacks/snacks-routing.module';
import{RiceRoutingModule} from './rice/rice-routing.module';
import {} from './diabetic/diabetic-routing.module';
const routes: Routes = [{
  path: 'breakfast',
  //loadChildren: 'app/breakfast/breakfast.module#BreakfastRoutingModule',
  loadChildren:'./breakfast/breakfast.module#BreakfastModule',
},
{
  path: 'snacks',
  //loadChildren: 'app/breakfast/breakfast.module#BreakfastRoutingModule',
  loadChildren:'./snacks/snacks.module#SnacksModule',
},
{
  path: 'rice',
  //loadChildren: 'app/breakfast/breakfast.module#BreakfastRoutingModule',
  loadChildren:'./rice/rice.module#RiceModule',
},
{
  path: 'diabetic',
  //loadChildren: 'app/breakfast/breakfast.module#BreakfastRoutingModule',
  loadChildren:'./diabetic/diabetic.module#DiabeticModule',
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
