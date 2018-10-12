import { List } from '../../interfaces/list.interface';
import { ListQuestions } from '../../interfaces/questions.interface';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WelcomeActions, SectionsActionTypes } from './welcome.actions';

export interface State extends fromRoot.State {
    welcome: WelcomeState;
    questions: WelcomeState;
}

export interface WelcomeState {
    showReferences: any;
    showListPayments: any;
    showDataDropdown: any;
    showListQuestions: any;
}

const initialState: WelcomeState = {
    showReferences: null,
    showListPayments: '',
    showDataDropdown: null,
    showListQuestions: ''
    // error: ''
};

// Selectors
const getPaymentsFeatureState = createFeatureSelector<WelcomeState>('welcome');
const getReferencesFeatureState = createFeatureSelector<WelcomeState>('welcome');
const getQuestionsDropFeatureState = createFeatureSelector<WelcomeState>('welcome');
const getQuestionsFeatureState = createFeatureSelector<WelcomeState>('welcome');

export const getShowReferences = createSelector(
    getReferencesFeatureState,
    state => state.showReferences
);

export const getShowPayments = createSelector(
    getPaymentsFeatureState,
    state => state.showListPayments
);

export const getShowDropQuestions = createSelector(
    getQuestionsDropFeatureState,
    state => state.showDataDropdown
);

export const getShowListQuestions = createSelector(
    getQuestionsFeatureState,
    state => state.showListQuestions
);

export function reducer(state = initialState, action: WelcomeActions): WelcomeState {
    switch (action.type) {
        case SectionsActionTypes.InitializeCurrentReference:

            return {
                ...state,
                showReferences: action.payload // Lo que manda el dispacht
            };

        case SectionsActionTypes.ClickSearchPayments:
            console.log('Existing state: ' + JSON.stringify(state));
            console.log('Payload: ', action.payload);

            return {
                ...state,
                showListPayments: action.payload
            };

        case SectionsActionTypes.GetDataDropdown:
            console.log('Existing state: ' + JSON.stringify(state));
            console.log('Payload: ', action.payload);

            return {
                ...state,
                showDataDropdown: action.payload
            };

        case SectionsActionTypes.ClickSearchQuestions:
            console.log('Existing state: ' + JSON.stringify(state));
            console.log('Payload: ', action.payload);

            return {
                ...state,
                showListQuestions: action.payload
            };


        /* case PaymentsActionTypes.InitializeCurrentReference:

            return {
                ...state,
                showReferences: {
                    select: ['RT'],
                    code: {
                        code2: 28
                    },
                    currency: ['ARS']
                }
            }; */

        default:
            return state;
    }
}
