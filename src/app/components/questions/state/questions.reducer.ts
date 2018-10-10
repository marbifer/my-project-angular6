import { ListQuestions } from '../../../interfaces/questions.interface';
import * as fromRoot from '../../../state/app.state';

export interface State extends fromRoot.State {
    questions: QuestionsState;
}

export interface QuestionsState {
    showListQuestions: string;
}

const initialState: QuestionsState = {
    showListQuestions: ''
    // error: ''
};

export function reducer(state = initialState, action): QuestionsState {
    switch (action.type) {
        case 'CLICK_SEARCH_QUESTIONS':
            console.log('Existing state: ' + JSON.stringify(state));
            console.log('Payload: ', action.payload);

            return {
                ...state,
                showListQuestions: action.payload
            };

        default:
            return state;
    }
}
