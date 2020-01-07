import axios from "axios";
import * as actions from './actionTypes';

const instance = axios.create({
    baseURL: 'http://localhost:5000/my-tcc-project-66a43/europe-west1/api',
});

export const signUp = (data) => async dispatch => {
    let apiUrl = 'http://localhost:5000/my-tcc-project-66a43/europe-west1/api/login';
    console.log(data);
    // const response = await axios.post(apiUrl, data);
    // console.log(response.data);
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
        console.log(FBIdToken);
        localStorage.setItem('FBIdToken', FBIdToken);
        instance.defaults.headers.common['Authorization'] = FBIdToken;
        dispatch(getUserData());
        dispatch({ type: actions.AUTH_SUCCESS });
        // history.push('/');
    }

    if (responseErr) console.log(responseErr.response.data);

    // dispatch({ type: actions.AUTH_SUCCESS });
}

export const getUserData = () => async dispatch => {
    let [response, responseErr] = await handle(instance.get('/user'));
    if (response) {
        dispatch({ type: actions.SET_USER, payload: response.data });
    }
    if (responseErr) console.log(responseErr.response);
}

