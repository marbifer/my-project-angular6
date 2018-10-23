import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ReferencesService } from '../../../services/service.index';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

/* Interfaces */
import { References } from '../../../interfaces/references.interface';
import { List } from '../../../interfaces/list.interface';

/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromWelcome from '../../state/welcome.reducer';
import * as welcomeActions from '../../state/welcome.actions';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-smart-component',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss']
})
export class SmartComponent implements OnInit, OnDestroy {

  @ViewChild(NgForm) saveForm: NgForm;

  public referencesCode: References;
  public fieldCode: number;
  public currentSelection: string;
  private addNumbersLength: number;
  public myErrorMessage$: Observable<string>;

  public currencySelection: string;
  public selectable = false;
  public errorMessage = false;
  private componentActive = true;

  public tableList: List;
  public showTable = false;

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

  onSearchReference(formValue) {
    const body = {
      ref: formValue.reference,
      currency: formValue.currency
    };

    console.log('body', body);

    // With Actions
    this._referencesService.postPaymentsFilter(body).subscribe(res => {
      this.store.dispatch(new welcomeActions.ClickSearchPayments(res[0])); // La respuesta se va a almacenar en el Store.
    });

    if (!formValue.reference && !formValue.currency && formValue.number1.length > 9) {
      this.showTable = false;
    } else {
      this.showTable = true;
    }
  }

  onAddNumbers(formValue) {
    const numbers = formValue.number1;
    console.log('numbers: ', numbers);
    this.addNumbersLength = numbers.length;
    console.log('characters: ', this.addNumbersLength);
    if (this.addNumbersLength === 9) {
      this.selectable = true;
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
