import { References } from '../../interfaces/references.interface';
import { Dropdown } from '../../interfaces/dropdown.interface';

/* NgRx */
import { Action } from '@ngrx/store';

/* PASOS PARA CONSTRUIR UNA ACCIÓN
1. Definir nuestros tipos de acción como un conjunto de constantes con nombre usando enum.
2. Construir el creador de acciones, que representa la acción como una clase con un tipo y payload.
3. Definir un tipo para unir a todos nuestros creadores de acciones.
4. Cambiar el código para usar las acciones en el componente product-list.component.ts dentro del método checkChanged() */

// Paso 1
export enum SectionsActionTypes {
  InitializeCurrentReference = '[Reference] Initialize Current Reference', // Esta cadena es la misma que está en DevTools en el navegador.
  ClickSearchPayments = '[Payment] Click Search Payments',
  GetDataDropdown = '[Dropdown] Get Data Dropdown',
  ClickSearchQuestions = '[Questions] Click Search Questions',
  Load = '[DataRef] Load',
  LoadSuccess = '[DataRef] Load Success',
  LoadFail = '[DataRef] Load Fail',

  LoadDrop = '[DataDrop] Load Drop',
  LoadSuccessDrop = '[DataDrop] Load Drop Success',
  LoadFailDrop = '[DataDrop] Load Drop Fail'
}

// Home => Form Reference
export interface MyModelMongoDataRef {
  select: string[];
  code: { code2: number };
  currency: string[];
  _id: string;
  __v: number;
}

// Home => Table Payments
export interface MyModelMongoData {
  _id: string;
  payments: Array<any>;
  ref: string;
  currency: string;
  __v: number;
}

// Questions => Dropdown Questions
export interface MyModelMongoDataDrop {
  categories: string[];
  _id: string;
  __v: number;
}

// Questions => Table Questions
export interface MyModelMongoDataListQuestions {
  _id: string;
  questions: Array<any>;
  catRelationship: string;
  __v: number;
}

// Paso 2: Action Creators: Creador de acciones
export class InitializeCurrentReference implements Action { // Importar Action de @ngrx
  readonly type = SectionsActionTypes.InitializeCurrentReference;

  constructor(public payload: MyModelMongoDataRef) { }
}

export class ClickSearchPayments implements Action {
  readonly type = SectionsActionTypes.ClickSearchPayments;

  constructor(public payload: MyModelMongoData) { }
}

export class GetDataDropdown implements Action {
  readonly type = SectionsActionTypes.GetDataDropdown;

  constructor(public payload: MyModelMongoDataDrop) { }
}

export class ClickSearchQuestions implements Action {
  readonly type = SectionsActionTypes.ClickSearchQuestions;

  constructor(public payload: MyModelMongoDataListQuestions) { }
}

export class Load implements Action {
  readonly type = SectionsActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = SectionsActionTypes.LoadSuccess;

  constructor(
    public payload: References) { }
}

export class LoadFail implements Action {
  readonly type = SectionsActionTypes.LoadFail;

  constructor(public payload: string) { }
}

export class LoadDrop implements Action {
  readonly type = SectionsActionTypes.LoadDrop;
}

export class LoadSuccessDrop implements Action {
  readonly type = SectionsActionTypes.LoadSuccessDrop;

  constructor(public payload: Dropdown) { }
}

export class LoadFailDrop implements Action {
  readonly type = SectionsActionTypes.LoadFailDrop;

  constructor(public payload: string) { }
}

// Paso 3
export type WelcomeActions = InitializeCurrentReference
  | ClickSearchPayments
  | GetDataDropdown
  | ClickSearchQuestions
  | Load
  | LoadSuccess
  | LoadFail
  | LoadDrop
  | LoadSuccessDrop
  | LoadFailDrop;
