import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Retirada } from 'src/app/modelos/retirada.model';
import { Observable } from 'rxjs';
import { Movimiento } from 'src/app/modelos/movimiento.model';

@Component({
  selector: 'app-retirada',
  templateUrl: './retirada.component.html',
  styleUrls: ['./retirada.component.css']
})
export class RetiradaComponent implements OnInit {
  @Input()
  retiradas: Observable<Retirada[]>;
  @Output()
  eliminarRetirada = new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminar($event, id) {
    this.eliminarRetirada.emit(id);
  }

}
