const CONNECT_USER = 'CONNECT_USER';

export const connectUser = (user) => {
    return {
        type: CONNECT_USER,
        payload: {
            user
        }
    }
}

//Async 

// function addTodoWithDispatch(text) {
//     const action = {
//       type: ADD_TODO,
//       text
//     }
//     dispatch(action)
//   }