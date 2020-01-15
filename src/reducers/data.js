import * as actions from '../actions/actionTypes';

const initialState = {
    loading: false,
    posts: []
};

export const data = (state = initialState, { payload, type }) => {
    switch (type) {
        case actions.LOADING_DATA:
            return {
                ...state,
                loading: true
            }
        case actions.GET_POSTS:
            return {
                ...state,
                posts: [...payload],
                loading: false
            }
            break;
        case actions.ADD_POST:
            return {
                ...state,
                posts: [payload, ...state.posts]
            }
            break;
        default:
            break;
    }

    return state;
}