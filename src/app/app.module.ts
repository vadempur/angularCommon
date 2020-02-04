import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoubleComponent } from './double/double.component';
import { LeafletmapComponent } from './leafletmap/leafletmap.component';
import { HeaderComponent } from './layout/header/header.component';
import { D3JsComponent } from './d3-js/d3-js.component';
import { ExamplesComponent } from './examples/examples.component';



@NgModule({
  declarations: [
    AppComponent,
    DoubleComponent,
    LeafletmapComponent,
    HeaderComponent,
    D3JsComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
