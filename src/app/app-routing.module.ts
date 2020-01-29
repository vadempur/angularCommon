import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoubleComponent } from './double/double.component';
import { LeafletmapComponent } from './leafletmap/leafletmap.component';

const routes: Routes = [
  {path:'login',component:DoubleComponent ,pathMatch:'full'},
  {path:'maps',component:LeafletmapComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
