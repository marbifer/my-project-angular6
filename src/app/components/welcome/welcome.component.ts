import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewChild } from '@angular/core';
import { ReferencesService } from '../../services/service.index';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

/* Interfaces */
import { References } from '../../interfaces/references.interface';
import { List } from '../../interfaces/list.interface';

/* NgRx */
import { Store, select, State } from '@ngrx/store';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  public referencesCode: References;
  private currentSelection: string;
  private addNumbersLength: number;
  private errorMessage = false;

  private currencySelection: string;
  private selectable = false;

  public tableList: List;
  private showTable = false;
  private sub: Subscription;
  private subs: Subscription;

  @ViewChild(NgForm) saveForm: NgForm;

  constructor(
    public _referencesService: ReferencesService,
    private store: Store<any>
  ) { }

  ngOnInit() {

    this.currentSelection = '';
    this.currencySelection = '';

    // First form REFERENCE
    this.sub = this._referencesService.selectItemsChanges$.subscribe(
      selectItems => {
        console.log('Se subscribe para traer los items almacenados en subject para el Dropdown ', selectItems);

        if (selectItems !== null) { // Se verifica que el subject no este vacío.
          this.referencesCode = selectItems;
          this.currentSelection = selectItems.select[0];
          this.currencySelection = selectItems.currency[0];
        }
      }
    );

    this._referencesService.getReferences();

    // Table PAYMENTS
    // TODO: Unsubscribe
    this.store.pipe(select('payments')).subscribe(
      state => {
        if (state) {
          console.log('rowTable', state);
          this.tableList = state.showListPayments;
        }
      });
  }

  searchReference(form: NgForm) {
    console.log('SEARCH', form.value);
    const selectedRef = this.currentSelection;
    const selectedCurrency = this.currencySelection;

    const body = {
      ref: selectedRef,
      currency: selectedCurrency
    };

    this._referencesService.postPaymentsFilter(body).subscribe(res => {
      this.store.dispatch({
        type: 'CLICK_SEARCH_PAYMENTS',
        payload: res[0]
      });
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
    this.sub.unsubscribe();
    // this.subs.unsubscribe();
  }

}
