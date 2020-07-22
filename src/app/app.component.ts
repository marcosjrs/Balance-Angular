import { Component, OnInit } from '@angular/core';
import { Ingreso } from './modelos/ingreso.model';
import { Retirada } from './modelos/retirada.model';
import { MovimientoService } from './servicios/movimiento.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ingresos$: Observable<Ingreso[]>;
  retiradas$: Observable<Retirada[]>;

  constructor(private movimientosSvc: MovimientoService) {
  }

  ngOnInit() {
    this.ingresos$ = this.movimientosSvc.ingresos$;
    this.retiradas$ = this.movimientosSvc.retiradas$;
    this.movimientosSvc.cargarTodo();

  }



}
