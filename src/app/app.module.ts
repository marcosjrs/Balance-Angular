import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { RetiradaComponent } from './componentes/retirada/retirada.component';
import { FormularioMovimientoComponent } from './componentes/formulario-movimiento/formulario-movimiento.component';

import { MovimientoService } from './servicios/movimiento.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    IngresoComponent,
    RetiradaComponent,
    FormularioMovimientoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MovimientoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
