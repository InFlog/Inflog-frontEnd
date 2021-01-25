import { STORE_USER_DATA, STORE_BRAND_DATA } from '../actions/app.action';

const initialState = {
    user: false,
    brand: {}
};

function appReducer(state = initialState, action) {
    console.warn("App reducer invoked with state: " + JSON.stringify(state) + " with action " + JSON.stringify(action));

    switch (action.type) {
        case STORE_USER_DATA:
            return {
                ...state,
                user: action.user,

            };
        case STORE_BRAND_DATA:
            return {
                ...state,
                brand: action.brand,

            };
    }

    return {
        ...initialState
    };
}

export default appReducer;