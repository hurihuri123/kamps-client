import {AUTH_STORE, CONTACT_STORE, USER_STORE} from '../consts/stores';
import AuthStore from './AuthStore';
import UserStore from './UserStore';
import ContactStore from "./ContactStore";

/**
 * Initiate all stores
 */

const authStore = new AuthStore();
const userStore = new UserStore();
const contactStore = new ContactStore();
/**
 * Save the instance in global object
 */
const rootStores = {
    [AUTH_STORE]: authStore,
    [USER_STORE]: userStore,
    [CONTACT_STORE]: contactStore,
};

// TODO: Debugging purpose - delete
window['stores'] = rootStores;

export default rootStores;