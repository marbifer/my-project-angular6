export function reducer(state, action) {
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
