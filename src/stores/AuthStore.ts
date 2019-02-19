import { action, computed, observable } from 'mobx';
import { RoutesPath } from '../consts/urlParams';
import User from '../models/User';
import AuthService from '../services/AuthService';

export default class AuthStore {
	@observable currentUser?: User;

	@action
	checkLoginAndRedirect(history: any) {
		if (!this.isUserLoggedIn) {
			this.login().then((user: User) => {
				this.redirectToCorrectPhase(history);
			});
		} else {
			this.redirectToCorrectPhase(history);
		}
	}

	private redirectToCorrectPhase(history: any) {
		history.replace(`${RoutesPath.registrationFinish}`);
	}

	@action
	login() {
		return AuthService.getCurrentUser().then((userObject: User) => {
			if (userObject) {
				this.currentUser = userObject;
				return this.currentUser;
			}

			return null;
		});
	}

	@action
	logout() {
		return AuthService.logout().then(() => {
			this.currentUser = undefined;
			window.location.href = '/';
		});
	}

	@action
	sendForgotPassword(email) {
		if (email) {
			return AuthService.sendForgotPassword(email);
		}
		return null;
	}

	@action
	changePassword(newPassword) {
		if (newPassword) {
			return AuthService.changePassword(newPassword);
		} else return null;
	}

	@action
	checkUser(email, password, loginType) {
		return AuthService.checkUser(email, password, loginType);
	}

	@action
	register(email: string, password: string) {
		return AuthService.register(email, password);
	}

	@action
	loginWithUserIDAndEmail(email: string, userID: string) {
		//return AuthService.log
	}

	@computed
	get currentUserId() {
		if (this.currentUser) {
			return this.currentUser.id;
		}

		return null;
	}
	@computed
	get // Only check if the current user has _id
	isUserLoggedIn() {
		return !!this.currentUserId;
	}
}
