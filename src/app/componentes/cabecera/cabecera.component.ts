import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  @Input()
  totalIngresos:Observable<Number>;
  @Input()
  totalRetiradas:Observable<Number>;
  @Input()
  disponible:Observable<Number>;
  @Input()
  porcentajeDisponible:Observable<Number>;

  constructor() { }

  ngOnInit(): void {
  }

}
