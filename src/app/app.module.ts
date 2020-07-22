import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { RetiradaComponent } from './componentes/retirada/retirada.component';
import { FormularioMovimientoComponent } from './componentes/formulario-movimiento/formulario-movimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    IngresoComponent,
    RetiradaComponent,
    FormularioMovimientoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
