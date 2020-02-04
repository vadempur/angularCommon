import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoubleComponent } from './double/double.component';
import { LeafletmapComponent } from './leafletmap/leafletmap.component';
import { D3JsComponent } from './d3-js/d3-js.component';
import { ExamplesComponent } from './examples/examples.component';

const routes: Routes = [
  {path:'login',component:DoubleComponent ,pathMatch:'full'},
  {path:'maps',component:LeafletmapComponent},
  {path:'',redirectTo:'examples',pathMatch:'full'},
  {path:'examples',component:ExamplesComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
