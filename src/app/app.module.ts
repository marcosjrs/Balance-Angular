import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { RetiradaComponent } from './retirada/retirada.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    IngresoComponent,
    RetiradaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
