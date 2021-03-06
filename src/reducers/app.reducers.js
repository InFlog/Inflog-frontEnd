import { STORE_USER_DATA, STORE_BRAND_DATA, STORE_INFLUENCER_DATA } from '../actions/app.action';

const initialState = {
    user: false,
    influencer: false,
    brand: false,
};

function appReducer(state = initialState, action) {
    console.warn("App reducer invoked with state: " + JSON.stringify(state) + " with action " + JSON.stringify(action));

    switch (action.type) {
        case STORE_USER_DATA:
            return {
                ...state,
                user: action.user,

            };

        case STORE_INFLUENCER_DATA:
            return {
                ...state,
                influencer: action.influencer
            }

        case STORE_BRAND_DATA:
            return {
                ...state,
                brand: action.brand
            }
    }

    return {
        ...initialState
    };
}

export default appReducer;