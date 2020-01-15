import * as actions from '../actions/actionTypes';

const initialState = {
    loading: false,
    authenticated: false,
    error: null
}

export const auth = (state = initialState, { payload, type }) => {

    switch (type) {
        case actions.AUTH_START: {
            return {
                ...state,
                loading: true
            }
        }
        case actions.AUTH_SUCCESS: {
            return {
                ...state,
                authenticated: true,
                error: false,
                loading: false
            }
            break;
        };
        case actions.AUTH_FAIL: {
            return {
                ...state,
                error: payload
            }
        }
        case actions.UNAUTH_SUCCESS: {
            return initialState;
            break;
        };
        default:
            break;
    }

    return state;
}