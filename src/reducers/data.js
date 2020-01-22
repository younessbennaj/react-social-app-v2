import * as actions from '../actions/actionTypes';

const initialState = {
    loading: false,
    posts: [],
    post: {}
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
        case actions.GET_POST:
            return {
                ...state,
                post: { ...payload },
                loading: false
            }
            break;
        case actions.ADD_POST:
            return {
                ...state,
                posts: [payload, ...state.posts]
            }
            break;
        case actions.ADD_COMMENT:

            let posts = state.posts.map((post) => {
                return post.postId === payload.postId ?
                    { ...post, commentCount: post.commentCount + 1 }
                    : post;
            });

            return {
                ...state,
                posts
            }

            break;
        default:
            break;
    }

    return state;
}