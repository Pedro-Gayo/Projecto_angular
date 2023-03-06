import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './productos/producto/producto.component';

import { RatingComponent } from './rating.component';
import { StarComponent } from './star/star.component';
import { StarFillComponent } from './starfill.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    StarFillComponent,
    StarComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
