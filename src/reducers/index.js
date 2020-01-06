// C'est un peu comme un fichier de configuration pour nos reducers.
// On va venir associé le retour de nos reducers à une variable qui sera donc
// une variable du state de notre application. 

import { combineReducers } from 'redux';

import { users } from './users';

// On map le retour de notre reducer à une variable
export default combineReducers({
    users,
});