import {observable} from "mobx";
import User from "../models/User";

export default class AuthStore {

    @observable
    currentUser?: User;

}