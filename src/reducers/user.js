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
        case actions.ADD_LIKE: {
            const { userFirstName, userLastName, postId } = payload;
            const like = {
                userFirstName,
                userLastName,
                postId
            }
            return {
                ...state,
                likes: [...state.likes, like]
            }
        }
        case actions.ADD_UNLIKE: {

            const likes = state.likes.filter(like => {
                return like.postId !== payload.postId;
            });

            return {
                ...state,
                likes: [...likes]
            }
        }
        default:
            break;
    }

    return state;
}