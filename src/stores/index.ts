import {AUTH_STORE,USER_STORE} from '../consts/stores';
import AuthStore from './AuthStore';
import UserStore from './UserStore';

/**
 * Initiate all stores
 */

const authStore = new AuthStore();
const userStore = new UserStore();
/**
 * Save the instance in global object
 */
const rootStores = {
    [AUTH_STORE]: authStore,
    [USER_STORE]: userStore,
};

// TODO: Debugging purpose - delete
window['stores'] = rootStores;

export default rootStores;