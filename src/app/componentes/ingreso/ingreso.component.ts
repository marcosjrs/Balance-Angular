import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingreso } from 'src/app/modelos/ingreso.model';
import { Observable } from 'rxjs';
import { Movimiento } from 'src/app/modelos/movimiento.model';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  @Input()
  ingresos: Observable<Ingreso[]>;
  @Output()
  eliminarIngreso = new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminar($event, id) {
    this.eliminarIngreso.emit(id);
  }

}
