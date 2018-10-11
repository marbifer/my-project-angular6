import { List } from '../../../interfaces/list.interface';
import * as fromRoot from '../../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WelcomeActions, PaymentsActionTypes } from './welcome.actions';

export interface State extends fromRoot.State {
    payments: PaymentsState;
}

export interface PaymentsState {
    showListPayments: any;
}

const initialState: PaymentsState = {
    showListPayments: ''
    // error: ''
};

// Selectors
const getPaymentsFeatureState = createFeatureSelector<PaymentsState>('payments');

export const getShowPayments = createSelector(
    getPaymentsFeatureState,
    state => state.showListPayments
);

export function reducer(state = initialState, action: WelcomeActions): PaymentsState {
    switch (action.type) {
        case PaymentsActionTypes.ClickSearchPayments:
            console.log('Existing state: ' + JSON.stringify(state));
            console.log('Payload: ', action.payload);

            return {
                ...state,
                showListPayments: action.payload
            };

        default:
            return state;
    }
}
