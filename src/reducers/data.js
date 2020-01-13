import * as actions from '../actions/actionTypes';

const initialState = {
    posts: []
};

export const data = (state = initialState, { payload, type }) => {
    switch (type) {
        case actions.GET_POSTS: {
            return {
                ...state,
                posts: [...payload],
            }
            break;
        };
        case actions.ADD_POST: {
            return {
                ...state,
                posts: [payload, ...state.posts]
            }
            break;
        }
        default:
            break;
    }

    return state;
}