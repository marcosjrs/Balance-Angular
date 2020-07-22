import { Component, OnInit } from '@angular/core';
import { Ingreso } from './modelos/ingreso.model';
import { Retirada } from './modelos/retirada.model';
import { MovimientoService } from './servicios/movimiento.service';
import { Observable } from 'rxjs';
import { Movimiento } from './modelos/movimiento.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ingresos$: Observable<Ingreso[]>;
  retiradas$: Observable<Retirada[]>;
  totalIngresos$: Observable<Number>;
  totalRetiradas$: Observable<Number>;
  disponible$: Observable<Number>;
  porcentajeDisponible$: Observable<Number>;

  constructor(private movimientosSvc: MovimientoService) {
  }

  ngOnInit() {
    this.ingresos$ = this.movimientosSvc.ingresos$;
    this.retiradas$ = this.movimientosSvc.retiradas$;
    this.totalIngresos$ = this.movimientosSvc.totalIngresos$;
    this.totalRetiradas$ = this.movimientosSvc.totalRetiradas$;
    this.disponible$ = this.movimientosSvc.disponible$;
    this.porcentajeDisponible$ = this.movimientosSvc.porcentajeDisponible$;
    this.movimientosSvc.cargarTodo();

  }

  eliminarRetirada(id: number) {
    this.movimientosSvc.eliminarRetirada(id);
  }

  crearRetirada(movimiento: Movimiento) {
    this.movimientosSvc.creaRetirada(movimiento);
  }

  eliminarIngreso(id: number) {
    this.movimientosSvc.eliminarIngreso(id);
  }
  crearIngreso(movimiento: Movimiento) {
    this.movimientosSvc.creaIngreso(movimiento);
  }



}
