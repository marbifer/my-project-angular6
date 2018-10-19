import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { ReferencesService, QuestionsService } from '../../services/service.index';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as welcomeActions from './welcome.actions';
import { References } from '../../interfaces/references.interface';
import { Dropdown } from '../../interfaces/dropdown.interface';

@Injectable()
export class WelcomeEffects {

  constructor(
    private _referencesService: ReferencesService,
    private _questionsService: QuestionsService,
    private actions$: Actions
  ) { }

  @Effect()
  loadReferences$: Observable<Action> = this.actions$.pipe(
    ofType(welcomeActions.SectionsActionTypes.Load),
    mergeMap((action: welcomeActions.Load) =>
      this._referencesService.getReferences().pipe(
        map((references: References) => (new welcomeActions.LoadSuccess(references))),
        catchError(err => of(new welcomeActions.LoadFail(err)))
      )
    )
  );

  @Effect()
  loadDataDropdown$: Observable<Action> = this.actions$.pipe(
    ofType(welcomeActions.SectionsActionTypes.LoadDrop),
    mergeMap((action: welcomeActions.LoadDrop) =>
      this._questionsService.getQuestions().pipe(
        map((drop: Dropdown) => (new welcomeActions.LoadSuccessDrop(drop))),
        catchError(err => of(new welcomeActions.LoadFailDrop(err)))
      )
    )
  );

}
