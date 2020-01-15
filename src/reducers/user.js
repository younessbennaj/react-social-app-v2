import * as actions from '../actions/actionTypes';

const initialState = {
    loading: false,
    credentials: {},
    likes: [],
    notifications: []
}

export const user = (state = initialState, { payload, type }) => {

    switch (type) {
        case actions.SET_USER: {
            return {
                ...state,
                credentials: payload.credentials,
                likes: payload.likes,
                loading: false
            }
            break;
        };
        case actions.LOADING_USER: {
            return {
                ...state,
                loading: true,
            }
            break;
        }
        default:
            break;
    }

    return state;
}