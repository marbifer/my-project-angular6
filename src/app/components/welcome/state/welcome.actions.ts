import { List } from '../../../interfaces/list.interface';

/* NgRx */
import { Action } from '@ngrx/store';

/* PASOS PARA CONSTRUIR UNA ACCIÓN
1. Definir nuestros tipos de acción como un conjunto de constantes con nombre usando enum.
2. Construir el creador de acciones, que representa la acción como una clase con un tipo y payload.
3. Definir un tipo para unir a todos nuestros creadores de acciones.
4. Cambiar el código para usar las acciones en el componente product-list.component.ts dentro del método checkChanged() */

// Paso 1
export enum PaymentsActionTypes {
  // ToggleProductCode = '[Product] Toggle Product Code',
  ClickSearchPayments = '[Payment] Click Search Payments' // Esta cadena es la misma que está en DevTools en el navegador.
  // InitializeCurrentReference = '[Payment] Initialize Current Reference',

}

export interface MyModelMongoData {
  _id: string;
  payments: Array<any>;
  ref: string;
  currency: string;
  __v: number;
}

// Paso 2: Action Creators: Creador de acciones
export class ClickSearchPayments implements Action { // Importar Action de @ngrx
  readonly type = PaymentsActionTypes.ClickSearchPayments;

  constructor(public payload: MyModelMongoData) { }
}

// Paso 3
export type WelcomeActions = ClickSearchPayments;
