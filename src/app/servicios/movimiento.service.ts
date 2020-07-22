import { Retirada } from '../modelos/retirada.model';
import { Ingreso } from '../modelos/ingreso.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Movimiento } from '../modelos/movimiento.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MovimientoService {

  private retiradas = new BehaviorSubject<Movimiento[]>([]);
  private ingresos = new BehaviorSubject<Movimiento[]>([]);
  private baseUrl = 'https://5f18127f7c06c900160dc967.mockapi.io';
  private dataStore: { retiradas: Retirada[], ingresos: Ingreso[] } = { retiradas: [], ingresos: [] };
  readonly retiradas$ = this.retiradas.asObservable();
  readonly ingresos$ = this.ingresos.asObservable();

  constructor(private http: HttpClient) { }

  cargarTodo(){

    this.http.get<Movimiento[]>(`${this.baseUrl}/retirada`).subscribe(data => {
      this.dataStore.retiradas = data;
      this.retiradas.next(Object.assign({}, this.dataStore).retiradas);
    }, error => console.log('Error al descargar retiradas'));

    this.http.get<Movimiento[]>(`${this.baseUrl}/ingreso`).subscribe(data => {
      this.dataStore.ingresos = data;
      this.ingresos.next(Object.assign({}, this.dataStore).ingresos);
    }, error => console.log('Error al descargar ingresos'));
  }


}
