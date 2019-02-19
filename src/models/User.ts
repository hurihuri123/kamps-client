import {observable} from "mobx";
import {UserType} from './enums';

class User {

    @observable
    id: string;

    @observable
    userType: UserType;

    @observable
    userName: string;

    @observable
    email: string;

    @observable
    phoneNumber: string;

    constructor(user?: any) {
        if (user) {
            this.    id = user.    id;
            this.userType = user.userType;
            this.userName = user.userName;
            this.email = user.email;
            this.phoneNumber = user.phoneNumber;
        }
    }
}

export default User;