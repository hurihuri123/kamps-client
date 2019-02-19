import {AUTH_STORE} from '../consts/stores';
import AuthStore from './AuthStore';

/**
 * Initiate all stores
 */

const authStore = new AuthStore();
/**
 * Save the instance in global object
 */
const rootStores = {
    [AUTH_STORE]: authStore,
};

// TODO: Debugging purpose - delete
window['stores'] = rootStores;

export default rootStores;