import { Component, ViewChild, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ReferencesService } from '../../services/service.index';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';

/* Interfaces */
import { References } from '../../interfaces/references.interface';
import { List } from '../../interfaces/list.interface';

/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromWelcome from '../state/welcome.reducer';
import * as welcomeActions from '../state/welcome.actions';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  @ViewChild(NgForm) saveForm: NgForm;
  /* @Input() myErrorMessage: string;
   @Input() referencesCode: References;
   @Input() tableList: List;
   @Output() searchRef = new EventEmitter<any>();
   @Output() addNum = new EventEmitter<any>();

   searchReference(form: NgForm): void {
     this.searchRef.emit(form);
   }

   addNumbers(): void {
     this.addNum.emit();
   } */

  public referencesCode: References;
  public fieldCode: number;
  private currentSelection: string;
  private addNumbersLength: number;
  private errorMessage = false;
  private myErrorMessage$: Observable<string>;

  private currencySelection: string;
  private selectable = false;

  public tableList: List;
  private showTable = false;
  private componentActive = true;
  // private subRef: Subscription;
  // private subPay: Subscription;

  constructor(
    public _referencesService: ReferencesService,
    private store: Store<fromWelcome.State>
  ) { }

  ngOnInit() {

    console.log('subscribe: ', this.componentActive);

    this.currentSelection = '';
    this.currencySelection = '';

    // First form REFERENCE
    // WITH STORE
    this.myErrorMessage$ = this.store.pipe(select(fromWelcome.getError));
    // this.store.dispatch(new welcomeActions.Load());
    this.store.pipe(select(fromWelcome.getShowReferences),
      takeWhile(() => this.componentActive))
      .subscribe(
        showReferences => {
          console.log('Se subscribe para traer los items almacenados en subject para el Dropdown', showReferences);

          if (showReferences !== null) { // Se verifica que el subject no este vacío.
            console.log('reference', showReferences);
            this.fieldCode = showReferences.code.code2;
            this.referencesCode = showReferences;
            this.currentSelection = showReferences.select[0];
            this.currencySelection = showReferences.currency[0];
          }
        });

    // First form REFERENCE => dispatch WITH ACTIONS
    this._referencesService.getReferences().subscribe(res => {
      console.log('RESPONSE:', res);
      this.store.dispatch(new welcomeActions.InitializeCurrentReference(res[0]));
    });

    // Table PAYMENTS
    // Redux With selectors
    this.store.pipe(select(fromWelcome.getShowPayments),
      takeWhile(() => this.componentActive))
      .subscribe(
        showListPayments => this.tableList = showListPayments);

  }

  searchReference(form: NgForm) {
    console.log('SEARCH', form.value);
    const selectedRef = this.currentSelection;
    const selectedCurrency = this.currencySelection;

    const body = {
      ref: selectedRef,
      currency: selectedCurrency
    };

    // With Actions
    this._referencesService.postPaymentsFilter(body).subscribe(res => {
      this.store.dispatch(new welcomeActions.ClickSearchPayments(res[0])); // La respuesta se va a almacenar en el Store.
    });

    if (!selectedRef && !selectedCurrency && this.addNumbersLength > 9) {
      this.showTable = false;
    } else {
      this.showTable = true;
    }
  }

  mostrarSeleccionAntesDeAgregar() {
    console.log('Lo seleccionado actualmente en el input de referencia: ', this.currentSelection);
    console.log('Lo seleccionado actualmente en el input de Currency: ', this.currencySelection);
  }

  addNumbers() {
    const numbers = this.saveForm.controls['number1'].value;
    console.log('numbers: ', numbers);
    this.addNumbersLength = numbers.length;
    console.log('characters: ', this.addNumbersLength);
    if (this.addNumbersLength === 9) {
      this.selectable = true;
      // this.showTable = true;
      this.errorMessage = false;
    } else {
      if (this.addNumbersLength > 9) {
        this.errorMessage = true;
      }
      this.selectable = false;
      this.showTable = false;
    }
  }

  ngOnDestroy(): void {
    this.componentActive = false;
    console.log('Unsubscribe de references: ', this.componentActive);
  }

}
