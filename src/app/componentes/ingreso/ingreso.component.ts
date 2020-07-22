import { Component, OnInit, Input } from '@angular/core';
import { Ingreso } from 'src/app/modelos/ingreso.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  @Input()
  ingresos:Observable<Ingreso[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
