import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movimiento } from 'src/app/modelos/movimiento.model';

@Component({
  selector: 'app-formulario-movimiento',
  templateUrl: './formulario-movimiento.component.html',
  styleUrls: ['./formulario-movimiento.component.css']
})
export class FormularioMovimientoComponent implements OnInit {

  @Output()
  crearIngreso = new EventEmitter<Movimiento>();
  @Output()
  crearRetirada = new EventEmitter<Movimiento>();

  constructor() { }

  ngOnInit(): void {
  }

  crear(tipo: string, concepto: string, cantidad:string) {
    if(tipo && concepto && cantidad){
      const movimiento = new Movimiento(concepto, parseInt(cantidad));
      if (tipo === "retirada") {
        this.crearRetirada.emit(movimiento);
      } else {
        this.crearIngreso.emit(movimiento);
      }
    }
  }
}
