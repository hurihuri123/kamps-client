import { observer } from 'mobx-react';
import { CustomButton, FBLoginButton, GBLoginButton } from 'nofshonit-base-web-client';
import * as React from 'react';
import Lang from '../../../config/Language';
import { USER_STORE } from '../../../consts/stores';
import { RoutesPath } from '../../../consts/urlParams';
import rootStores from '../../../stores';
import UserStore from '../../../stores/UserStore';

import LoginHeader from './LoginHeader';
interface Props {
	history: any; // UrlParams - From react-router
}
interface IState {
	isLoading: boolean;
	validationError: string;
}

const userStore: UserStore = rootStores[USER_STORE];

@observer
class Login extends React.Component<Props, IState> {
	private history;

	constructor(props: Props) {
		super(props);
		this.history = this.props.history;
		this.state = {
			isLoading: false,
			validationError: ''
		};
	}

	onError = () => {
		this.setState({ validationError: 'Token not exist' });
	};

	onClick = () => {
		this.history.replace(`/${RoutesPath.login}/${RoutesPath.loginWithEmail}`);
	};

	onFirstTimeCliked = () => {
		this.history.replace(`/${RoutesPath.login}/${RoutesPath.register}`);
	};

	forgotPasswordClicked = () => {
		this.history.replace(`${RoutesPath.forgotPassword}`);
	};

	GooglefinishLogin = (email: string, token: string) => {
		this.onLoginWithApis(email, token);
	};

	FBfinishLogin = (email: string, token: string) => {
		this.onLoginWithApis(email, token);
	};

	onLoginWithApis = (email: string, userID: string) => {
		if (email) {
			userStore.setUserMail(email);
			//  userStore.loginWithTokenAndEMail(email, userID);
			userStore.loginWithUserIDAndEmail(email, userID);
			this.history.replace(`${RoutesPath.home}`);
		} else {
			this.history.replace(`${RoutesPath.withOutEmail}`);
		}
	};

	render() {
		return (
			<div className="main-login-container">
				<LoginHeader onFirstTimeCliked={this.onFirstTimeCliked} />
				<div className="button-group">
					{/* // TODO: Change to onFinishLogin */}
					<FBLoginButton FBfinishLogin={this.FBfinishLogin} text={Lang.format('FaceBook')} onError={this.onError} />
					<GBLoginButton text={Lang.format('Google')} GooglefinishLogin={this.GooglefinishLogin} onError={this.onError} />
					<CustomButton onClick={this.onClick} color="gray" large text={Lang.format('LoginWithEmail')} />

					<div className="or-container">
						<span className="or-item">{Lang.format('Or')}</span>
					</div>
					<div className="guest-btn-container">
						<CustomButton color="gray" large text={Lang.format('KeepAGuest')} />
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
