import { PROFILE_IMAGE, STORE_USER_DATA } from '../actions/app.action';

const initialState = {
    user: false,
    url: false
};

function appReducer(state = initialState, action) {
    console.warn("App reducer invoked with state: " + JSON.stringify(state) + " with action " + JSON.stringify(action));

    switch (action.type) {
        case STORE_USER_DATA:
            return {
                ...state,
                user: action.user,

            };
        case PROFILE_IMAGE:
            return {
                ...state,
                url: action.url
            }
    }

    return {
        ...initialState
    };
}

export default appReducer;