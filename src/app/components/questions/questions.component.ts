import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewChild } from '@angular/core';
import { QuestionsService } from '../../services/service.index';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';

/* Interfaces */
import { ListQuestions } from '../../interfaces/questions.interface';
import { Dropdown } from '../../interfaces/dropdown.interface';

/* NgRx */
import { select, Store } from '@ngrx/store';
import * as fromWelcome from '../state/welcome.reducer';
import * as welcomeActions from '../state/welcome.actions';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {

  public dropdownItems: Dropdown;
  private currentSelection: string;
  private showTable = false;
  public tableList: ListQuestions;
  private errorMessageDrop$: Observable<string>;
  private componentActive = true;
  // private subRef: Subscription;
  // private subPay: Subscription;

  @ViewChild(NgForm) saveForm: NgForm;

  constructor(
    public _questionsService: QuestionsService,
    private store: Store<any>
  ) { }

  ngOnInit() {

    console.log('subscribe: ', this.componentActive);

    // Dropdown Questions
    // WITH STORE
    this.errorMessageDrop$ = this.store.pipe(select(fromWelcome.getErrorDrop));
    this.store.dispatch(new welcomeActions.LoadDrop());
    this.store.pipe(select(fromWelcome.getShowDropQuestions),
      takeWhile(() => this.componentActive))
      .subscribe(
        showDataDropdown => {
          console.log('Se subscribe para traer los items almacenados en subject para el Dropdown', showDataDropdown);

          if (showDataDropdown !== null) { // Se verifica que el subject no este vacío.
            // this.dataDropdown = showDataDropdown;
            this.dropdownItems = showDataDropdown;
            this.currentSelection = showDataDropdown.categories[0];
          }
        });

    this._questionsService.getQuestions().subscribe(res => {
      console.log('RESPONSE', res);
      this.store.dispatch(new welcomeActions.GetDataDropdown(res[0]));
    });

    // Table QUESTIONS
    // Redux With selectors
    this.store.pipe(select(fromWelcome.getShowListQuestions),
      takeWhile(() => this.componentActive))
      .subscribe(
        showListQuestions => this.tableList = showListQuestions);

  }

  selectCategory(selectCategory) {
    console.log('Lo seleccionado actualmente en el input de referencia: ', selectCategory);
    this.currentSelection = selectCategory;
  }

  searchQuestionCategorie(form: NgForm) {
    console.log('SEARCH', form.value);
    const selectedCat = this.currentSelection;

    const body = {
      catRelationship: selectedCat
    };

    // With Actions
    this._questionsService.postQuestionsFilter(body).subscribe(res => {
      this.store.dispatch(new welcomeActions.ClickSearchQuestions(res[0]));
    });

    if (!selectedCat) {
      this.showTable = false;
    } else {
      this.showTable = true;
    }
  }

  ngOnDestroy(): void {
    this.componentActive = false;
    console.log('Unsubscribe de questions: ', this.componentActive);
  }


}
