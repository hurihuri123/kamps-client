import { action, computed, IObservableArray, observable } from "mobx";
import AuthStore from './AuthStore'
import User from '../models/User';

export default class UserStore {
    authStore: AuthStore;

    @observable
    currentUser: User;

    @observable
    allUser: IObservableArray<User> = observable([]);

    constructor() {
        this.currentUser = new User();
    }

    @action
    setUserMail(email) {
        this.currentUser.email = email;
    }

    @action
    loginWithTokenAndEMail(email, token) {

    }

    @action
    loginWithUserIDAndEmail(email,userID){
     //   AuthStore.

    }
}