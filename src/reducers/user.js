import * as actions from '../actions/actionTypes';

const initialState = {
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
                likes: payload.likes
            }
            break;
        };
        default:
            break;
    }

    return state;
}