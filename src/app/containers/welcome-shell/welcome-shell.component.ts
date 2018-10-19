import { Component, OnInit, ViewChild } from '@angular/core';


import { ReferencesService } from '../../services/service.index';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';

/* Interfaces */
import { References } from '../../interfaces/references.interface';
import { List } from '../../interfaces/list.interface';

/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromWelcome from '../../components/state/welcome.reducer';
import * as welcomeActions from '../../components/state/welcome.actions';

@Component({
  selector: 'app-welcome-shell',
  templateUrl: './welcome-shell.component.html',
  styleUrls: ['./welcome-shell.component.scss']
})
export class WelcomeShellComponent {

  /* @ViewChild(NgForm) saveForm: NgForm;
  private addNumbersLength: number;
  private showTable = false;
  private selectable = false;
  private errorMessage = false;
  private currencySelection: string;
  private currentSelection: string;
  public fieldCode: number;

  /* public referencesCode: References;
  public fieldCode: number;
  private myErrorMessage$: Observable<string>;
  public tableList: List;
  private showTable = false;
  private subRef: Subscription;
  private subPay: Subscription; */

  public referencesCode$: Observable<References>;
  // public fieldCode$: Observable<number>;
  // private currentSelection$: Observable<string>;
  // private addNumbersLength$: Observable<number>;
  // private errorMessage$: Observable<boolean>;
  private myErrorMessage$: Observable<string>;

  // private currencySelection$: Observable<string>;
  // private selectable$: Observable<boolean>;

  public tableList$: Observable<List>;
  // private showTable$: Observable<boolean>;
  // private subRef$: Observable<Subscription>;
  // private subPay$: Observable<Subscription>;
  // private componentActive = true;


  /* constructor(
    public _referencesService: ReferencesService,
    private store: Store<fromWelcome.State>
  ) { }

  ngOnInit() {

    this.currentSelection = '';
    this.currencySelection = '';

    // this.store.dispatch(new welcomeActions.Load());

    // First form REFERENCE => dispatch WITH ACTIONS
    this._referencesService.getReferences().subscribe(res => {
      console.log('RESPONSE:', res);
      this.store.dispatch(new welcomeActions.InitializeCurrentReference(res[0]));
    });

    // First form REFERENCE
    // WITH STORE
    this.myErrorMessage$ = this.store.pipe(select(fromWelcome.getError));
    this.referencesCode$ = this.store.pipe(select(fromWelcome.getShowReferences));
    this.tableList$ = this.store.pipe(select(fromWelcome.getShowPayments));

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

  /* ngOnDestroy(): void {
    this.subRef.unsubscribe();
    this.subPay.unsubscribe();
  } */

}
