import { References } from '../../../interfaces/references.interface';
import { List } from '../../../interfaces/list.interface';
import * as fromRoot from '../../../state/app.state';

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

export function reducer(state = initialState, action): PaymentsState {
    switch (action.type) {
        case 'CLICK_SEARCH_PAYMENTS':
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
