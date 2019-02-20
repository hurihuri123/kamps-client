import { Logger } from 'nofshonit-base-web-client';
import ClientConfig from '../config/index';
import User from '../models/User';
import BaseHTTPService from './BaseHTTPService';
import { LoginType } from '../models/enums';

export interface LoginWithMailReponse {
	error?: boolean;
	errMsg?: string;
	user?: User;
}

class AuthService extends BaseHTTPService {
	async getCurrentUser() {
		try {
			const response = await this.httpGet('/getCurrentUser');
			if (response && response.status) {
				const user = response.data.data;
				return user;
			}

			throw new Error('Error in response from getCurrentUser');
		} catch (err) {
			Logger.error(`error in getCurrentUser`, err);
			throw err;
		}
	}

	logout() {
		return this.httpGet('/logout').then((response) => {
			// Redirect to HomePage...
		});
	}

	// async loginWithMailAndPassword(email: string, password: string): Promise<LoginWithMailReponse> {
	//     let loginWithMailReponse: LoginWithMailReponse;
	//     try {
	//         const response = await this.httpPost('/loginWithMailAndPassword', {mail: email, password: password});
	//         if (response && response.status) {
	//             loginWithMailReponse = {
	//                 user: response.data
	//             };
	//             return loginWithMailReponse;
	//         }

	//         throw new Error('Error in response from loginWithMail');
	//     } catch (err) {
	//         // "Simulate" call to "then"
	//         // loginWithMailReponse = {
	//         //     error: true,
	//         //     errMsg: Lang.format('THIS_FREE_MAIL_ADDRESS_IS_NOT_VALID')
	//         // };
	//         // Logger.error(`error in loginWithMail ${JSON.stringify(loginWithMailReponse)}`);
	//         // return loginWithMailReponse;
	//     }
	// }

	login(email, pass): Promise<User> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (email && pass) {
					resolve(new User());
				} else reject();
			});
		});
	}

	loginWithGoogle(email, token): Promise<User> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (email && token) resolve(new User());
				else reject();
			}, 1000);
		});
	}

	loginWithFb(email, token): Promise<User> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (token) {
					resolve(new User());
				} else reject();
			}, 1000);
		});
	}

	updateUserPassword(password): Promise<boolean> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (password) resolve(true);
				else reject(false);
			}, 1000);
		});
	}

	// register(user:User):Promise<User>{

	//     return new Promise((resolve,reject)=>{
	//         setTimeout(()=>{
	//             if(user)
	//             resolve(new User());
	//             else reject();

	//         },1000)
	//     })
	// }

	sendForgotPassword(email: string): Promise<boolean> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (email) resolve(true);
				else reject;
			}, 1000);
		});
	}

	changePassword(newPassword: string): Promise<boolean> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (newPassword) {
					resolve(true); //we need to do a HTTP PUT request to change the password to the user.
				}
			}, 1000);
		});
	}

	// Todo integration:: add return value.
	loginWithEmailAndPass(email: string, password: string, loginType: number) {
		const request = {
			email,
			password,
			loginType
		};
		return this.httpPost('/users/authenticate', request)
			.then((res) => {
				console.log(res);
				return new User();
			})
			.catch((err) => {
				console.log('error:::', err);
			});
	}

	loginWithApi(email:string,userID:string,loginType:LoginType,accessToken:string){

		const request = {
			AccessID:userID,
			LoginType :loginType,
			email:email,
			AccessToken:accessToken
		}

		return this.httpPost('/users/authenticate',request)
		.then(res=>{
			if(res&& res.status){
				return new User(res.data);
			}else{
				console.log(res.errorDescription);
				return new Error('need to send the error desc and show it to the user');
			}

		})
		.catch(err=>{
			console.log(err);
		})
	}

	register(email: string, password: string): Promise<User> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (email && password) {
					resolve(new User());
				} else {
					reject();
				}
			}, 1000);
		});
	}
	async loginWithUserIDAndEmail(email: string, userID: string) {
		// const response = await this.httpGet()
	}
}

export default new AuthService(ClientConfig.authBaseApi);
