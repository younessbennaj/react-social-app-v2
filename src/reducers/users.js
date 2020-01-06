const CONNECT_USER = 'CONNECT_USER';

export const users = (state = [], { payload, type }) => {
    switch (type) {
        case CONNECT_USER: {
            const user = { ...payload.user };
            return ([...state, user]);
        }
        default:
            break;
    }

    return state;
}