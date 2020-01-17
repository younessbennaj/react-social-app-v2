import axios from "axios";
import * as actions from './actionTypes';

/*/
ACTION CREATORS

On utilise des action creators lorque l'on a besoin de dispatcher quelque chose
en réponse à une action de l'utilisateur ou tout autre type d'action dans notre 
application.

Les action creators sont des fonctions que l'on peut appeler n'importe où dans
notre applciation, qui évite de répéter partout où on en besoin des store.dispatch() 
partout dans notre application.

Son rôle peut parfois seulement consister à dispatcher une seule action au store.

Pour résumer les actions creators sont simplement des fonctions qui retournent une action.
/*/

//Permet de gérer les erreurs lors des différents call API
const handle = (promise) => {
    return promise
        .then(data => ([data, undefined]))
        .catch(error => Promise.resolve([undefined, error]));
}

//Authentication

export const signUp = (data, history) => async dispatch => {
    dispatch({ type: actions.AUTH_START })
    let [response, responseErr] = await handle(axios.post('/signup', data));
    if (response) {
        const FBIdToken = `Bearer ${response.data.token}`;
        localStorage.setItem('FBIdToken', FBIdToken);
        axios.defaults.headers.common['Authorization'] = FBIdToken;
        dispatch(getUserData());
        dispatch({ type: actions.AUTH_SUCCESS });
        history.push('/');
    }

    if (responseErr) {
        console.error(responseErr.response.data);
    }
}

export const signIn = (data, history) => async dispatch => {
    dispatch({ type: actions.AUTH_START })
    dispatch({ type: actions.LOADING_USER });

    let [response, responseErr] = await handle(axios.post('/login', data));

    if (response) {
        const FBIdToken = `Bearer ${response.data.token}`;
        localStorage.setItem('FBIdToken', FBIdToken);
        //Set authorization header with jwt token
        axios.defaults.headers.common['Authorization'] = FBIdToken;
        dispatch(getUserData());
        dispatch({ type: actions.AUTH_SUCCESS });
        history.push('/');
    }

    if (responseErr) {
        dispatch({ type: actions.AUTH_FAIL, payload: responseErr.response.data });
    }

}

export const signOut = (history) => {
    localStorage.removeItem('FBIdToken');
    history.push('/login');
    return {
        type: actions.UNAUTH_SUCCESS
    }
}

//USER

export const getUserData = () => async dispatch => {
    dispatch({ type: actions.LOADING_USER });
    let [response, responseErr] = await handle(axios.get('/user'));
    if (response) {
        dispatch({ type: actions.SET_USER, payload: response.data });
    }
    if (responseErr) console.error(responseErr.response);
}

export const editUserDetails = (data) => async dispatch => {
    dispatch({ type: actions.LOADING_USER });
    let [response, responseErr] = await handle(axios.post('/user', data));
    if (response) {
        dispatch(getUserData());
    }

    if (responseErr) {
        console.log(responseErr.response)
    }
}

export const editUserImage = (data) => async dispatch => {
    let [response, responseErr] = await handle(axios.post('/user/image', data));
    if (response) {
        dispatch(getUserData());
    }

    if (responseErr) {
        console.log(responseErr.response)
    }
}

//DATA

export const addPost = data => async dispatch => {
    // instance.defaults.headers.common['Authorization'] = localStorage.getItem('FBIdToken');
    let [response, responseErr] = await handle(axios.post('/post', data));
    if (response) {
        dispatch({ type: actions.ADD_POST, payload: response.data })
    }
    if (responseErr) console.error(responseErr.response);
}

export const getPosts = data => async dispatch => {
    dispatch({ type: actions.LOADING_DATA });
    let [response, responseErr] = await handle(axios.get('/posts'));
    // dispatch({ type: actions.LOADING_DATA });
    if (response) {
        dispatch({ type: actions.GET_POSTS, payload: response.data })
    }
    if (responseErr) console.error(responseErr.response);
}