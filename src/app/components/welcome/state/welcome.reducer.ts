export function reducer(state, action) {
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
