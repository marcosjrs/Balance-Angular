import { Retirada } from '../modelos/retirada.model';
import { MovimientosStore } from '../modelos/movimientos-store';
import { Observable, BehaviorSubject } from 'rxjs';
import { Movimiento } from '../modelos/movimiento.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MovimientoService {

  private baseUrl = 'https://5f18127f7c06c900160dc967.mockapi.io';

  private retiradas = new BehaviorSubject<Movimiento[]>([]);
  private ingresos = new BehaviorSubject<Movimiento[]>([]);
  private totalIngresos = new BehaviorSubject<Number>(0);
  private totalRetiradas = new BehaviorSubject<Number>(0);
  private disponible = new BehaviorSubject<Number>(0);
  private porcentajeDisponible = new BehaviorSubject<Number>(0);

  readonly retiradas$ = this.retiradas.asObservable();
  readonly ingresos$ = this.ingresos.asObservable();
  readonly totalIngresos$ = this.totalIngresos.asObservable();
  readonly totalRetiradas$ = this.totalRetiradas.asObservable();
  readonly disponible$ = this.disponible.asObservable();
  readonly porcentajeDisponible$ = this.porcentajeDisponible.asObservable();

  private dataStore: MovimientosStore = {
    retiradas: [], ingresos: [],
    totalIngresos: 0, totalRetiradas: 0,
    disponible: 0, porcentajeDisponible: 0
  };


  constructor(private http: HttpClient) { }

  cargarTodo() {

    this.http.get<Movimiento[]>(`${this.baseUrl}/retirada`).subscribe(data => {
      this.dataStore.retiradas = data;
      this.retiradas.next(Object.assign({}, this.dataStore).retiradas);
      this.establecerCalculos();
    }, error => console.log('Error al descargar retiradas'));

    this.http.get<Movimiento[]>(`${this.baseUrl}/ingreso`).subscribe(data => {
      this.dataStore.ingresos = data;
      this.ingresos.next(Object.assign({}, this.dataStore).ingresos);
      this.establecerCalculos();
    }, error => console.log('Error al descargar ingresos'));

  }

  establecerCalculos() {
    let totalRetiradas = 0;
    let totalIngresos = 0;

    this.dataStore.ingresos.forEach((ingreso) => {
      totalIngresos += ingreso.cantidad;
    });
    this.dataStore.retiradas.forEach((retirada) => {
      totalRetiradas += retirada.cantidad;
    });

    this.dataStore.totalIngresos = totalIngresos;
    this.totalIngresos.next(Object.assign({}, this.dataStore).totalIngresos);

    this.dataStore.totalRetiradas = totalRetiradas;
    this.totalRetiradas.next(Object.assign({}, this.dataStore).totalRetiradas);

    this.dataStore.disponible = totalIngresos - totalRetiradas;
    this.disponible.next(Object.assign({}, this.dataStore).disponible);

    this.dataStore.porcentajeDisponible = totalIngresos / totalRetiradas;
    this.porcentajeDisponible.next(Object.assign({}, this.dataStore).porcentajeDisponible);

  }


  creaRetirada(movimiento: Movimiento) {
    //this.http.post<Movimiento>(`${this.baseUrl}/retirada`, JSON.stringify(movimiento)).subscribe(data => {
    this.http.post<Movimiento>(`${this.baseUrl}/retirada`, {"concepto": movimiento.concepto, "cantidad": movimiento.cantidad, "id": null} ).subscribe(data => {
      this.dataStore.retiradas.push(data);
      this.retiradas.next(Object.assign({}, this.dataStore).retiradas);
      this.establecerCalculos();
    }, error => console.log('No se pudo crear la retirada'));
  }

  eliminarRetirada(id: number) {
    this.http.delete(`${this.baseUrl}/retirada/${id}`).subscribe(response => {
      this.dataStore.retiradas.forEach((t, i) => {
        if (t.id === id) { this.dataStore.retiradas.splice(i, 1); }
      });
      this.retiradas.next(Object.assign({}, this.dataStore).retiradas);
      this.establecerCalculos();
    }, error => console.log('No se pudo borrar la retirada'));
  }

  creaIngreso(movimiento: Movimiento) {
    //this.http.post<Movimiento>(`${this.baseUrl}/ingreso`, JSON.stringify(movimiento)).subscribe(data => {
    this.http.post<Movimiento>(`${this.baseUrl}/ingreso`, {"concepto": movimiento.concepto, "cantidad": movimiento.cantidad, "id": null}).subscribe(data => {
      this.dataStore.ingresos.push(data);
      this.ingresos.next(Object.assign({}, this.dataStore).ingresos);
      this.establecerCalculos();
    }, error => console.log('No se pudo crear el ingreso'));
  }

  eliminarIngreso(id: number) {
    this.http.delete(`${this.baseUrl}/ingreso/${id}`).subscribe(response => {
      this.dataStore.ingresos.forEach((t, i) => {
        if (t.id === id) { this.dataStore.ingresos.splice(i, 1); }
      });
      this.ingresos.next(Object.assign({}, this.dataStore).ingresos);
      this.establecerCalculos();
    }, error => console.log('No se pudo borrar el ingreso'));
  }

}
