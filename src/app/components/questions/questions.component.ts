import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewChild } from '@angular/core';
import { QuestionsService } from '../../services/service.index';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

/* Interfaces */
import { ListQuestions } from '../../interfaces/questions.interface';
import { Dropdown } from '../../interfaces/dropdown.interface';

/* NgRx */
import { select, Store } from '@ngrx/store';


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
  private sub: Subscription;

  @ViewChild(NgForm) saveForm: NgForm;

  constructor(
    public _questionsService: QuestionsService,
    private store: Store<any>
  ) { }

  ngOnInit() {

    // Dropdown Questions
    this.sub = this._questionsService.dropItemsChanges$.subscribe(
      dropItems => {
        console.log('Se subscribe para traer los items almacenados en subject para el Dropdown ', dropItems);

        if (dropItems !== null) { // Se verifica que el subject no este vacío.
          this.dropdownItems = dropItems;
          this.currentSelection = dropItems.categories[0];
        }

      }
    );

    this._questionsService.getQuestions();

    // Table QUESTIONS
    // TODO: Unsubscribe
    this.store.pipe(select('questions')).subscribe(
      state => {
        if (state) {
          console.log('rowTable', state);
          this.tableList = state.showListQuestions;
        }
      });
  }

  selectCategory(selectCategory) {
    console.log('Lo seleccionado actualmente en el input de referencia: ', selectCategory);
    this.currentSelection = selectCategory;
  }

  searchQuestionCategorie(form: NgForm) {
    console.log('SEARCH', form.value);
    const selectedCat = this.currentSelection;
    console.log('acaaaaaaaaaaaa', selectedCat);

    const body = {
      catRelationship: selectedCat
    };

    this._questionsService.postQuestionsFilter(body).subscribe(response => {
      this.store.dispatch({
        type: 'CLICK_SEARCH_QUESTIONS',
        payload: response[0]
      });
    });


    if (!selectedCat) {
      this.showTable = false;
    } else {
      this.showTable = true;
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
