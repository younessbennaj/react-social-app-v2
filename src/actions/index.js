import axios from "axios";
import * as actions from './actionTypes';

const instance = axios.create({
    baseURL: 'http://localhost:5000/my-tcc-project-66a43/europe-west1/api',
});

export const signUp = (data, history) => async dispatch => {
    console.log(data);
    let [response, responseErr] = await handle(instance.post('/signup', data));
    if (response) {
        const FBIdToken = `Bearer ${response.data.token}`;
        localStorage.setItem('FBIdToken', FBIdToken);
        instance.defaults.headers.common['Authorization'] = FBIdToken;
        dispatch(getUserData(instance, history));
        dispatch({ type: actions.AUTH_SUCCESS });
        history.push('/');
    }

    if (responseErr) {
        console.error(responseErr.response.data);
    }
}

const handle = (promise) => {
    return promise
        .then(data => ([data, undefined]))
        .catch(error => Promise.resolve([undefined, error]));
}

export const signIn = (data, history) => async dispatch => {

    let [response, responseErr] = await handle(instance.post('/login', data));

    if (response) {
        const FBIdToken = `Bearer ${response.data.token}`;
        localStorage.setItem('FBIdToken', FBIdToken);
        //Set authorization header with jwt token
        instance.defaults.headers.common['Authorization'] = FBIdToken;
        dispatch(getUserData(instance, history));
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

export const getUserData = (instance, history) => async dispatch => {
    let [response, responseErr] = await handle(instance.get('/user'));
    if (response) {
        dispatch({ type: actions.SET_USER, payload: response.data });
    }
    if (responseErr) console.error(responseErr.response);
}

