import * as actions from '../actions/actionTypes';

const initialState = {
    authenticated: false,
    credentials: {},
    likes: [],
    notifications: []
}

export const user = (state = initialState, { payload, type }) => {
    console.log(type);

    switch (type) {
        case 'SET_USER': {
            console.log(payload);
            return {
                ...state,
                credentials: payload.credentials,
                likes: payload.likes
            }
            break;
        };
        case 'AUTH_SUCCESS': {
            console.log("SUCCESS");
            return {
                ...state,
                authenticated: true
            }
            break;
        };
        default:
            break;
    }

    return state;
}