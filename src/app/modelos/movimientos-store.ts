import { Retirada } from './retirada.model';
import { Ingreso } from './ingreso.model';

export interface MovimientosStore {
  retiradas: Retirada[];
  ingresos: Ingreso[];
  totalIngresos: Number;
  totalRetiradas: Number;
  disponible: Number;
  porcentajeDisponible: Number
}
