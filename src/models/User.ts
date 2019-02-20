import { observable } from 'mobx';
 import {LoginType} from './enums';


class User {
    @observable 
    id: string;

    @observable
     firstName: string;

    @observable
     lastName: string;

    @observable
     userName: string;

     @observable
     password:string;

     @observable
     loginType:LoginType;

     @observable
     accsessID:string;

     @observable
     accessToken:string;

    @observable 
    email: string;

    @observable
    identityNumber:string;


	constructor(user?: any) {
		if (user) {
			this.id = user.id;
            this.userName = user.userName;
            this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.password =user.password;
            this.loginType = user.loginType;
            this.accessToken = user.accessToken;
            this.accsessID = user.accsessID;
            this.identityNumber = user.identityNumber;
			this.email = user.email;
			
		}
	}
}

export default User;
