import { observer } from 'mobx-react';
import { CustomButton } from 'nofshonit-base-web-client';
import * as React from 'react';
import Lang from '../../../config/Language';
import { USER_STORE,AUTH_STORE } from '../../../consts/stores';
import { RoutesPath } from '../../../consts/urlParams';
import rootStores from '../../../stores';
import UserStore from '../../../stores/UserStore';
import FBLogin from '../../LoginApis/FaceBookLogin/FBLogin';
import GBLogin from '../../LoginApis/GoogleLogin/GBLogin';
import {LoginType} from  '../../../models/enums'
import LoginHeader from './LoginHeader';
import AuthStore from '../../../stores/AuthStore';
interface Props {
	history?: any; // UrlParams - From react-router
}
interface IState {
	isLoading: boolean;
	validationError: string;
}

const userStore: UserStore = rootStores[USER_STORE];
const authStore: AuthStore = rootStores[AUTH_STORE];

@observer
export  class Login extends React.Component<Props, IState> {
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

	GooglefinishLogin = (email: string, token: string,loginType:LoginType,accessToken:string) => {

		this.onLoginWithApis(email, token,loginType,accessToken);
	};

	FBfinishLogin = (email: string, token: string,loginType:LoginType,accessToken:string) => {
		this.onLoginWithApis(email, token,loginType,accessToken);
	};

	onLoginWithApis = (email: string, userID: string,loginType:LoginType,accessToken:string) => {
		if (email) {
			authStore.loginWithApi(email,userID,loginType,accessToken);
		} else {
			// this.gal.show()
		}
	};

	gal:any;
	render() {
		return (
			<>
			{/* <FacebookBlaBLaDialog ref={this.gal}/> */}
			<div className="main-login-container">
				<LoginHeader onFirstTimeCliked={this.onFirstTimeCliked} />
				<div className="button-group">
					{/* // TODO: Change to onFinishLogin */}
					<FBLogin FBfinishLogin={this.FBfinishLogin}  onError={this.onError} />
					<GBLogin  GooglefinishLogin={this.GooglefinishLogin} onError={this.onError} />
					<CustomButton onClick={this.onClick} color="gray" large text={Lang.format('LoginWithEmail')} />

					<div className="or-container">
						<span className="or-item">{Lang.format('Or')}</span>
					</div>
					<div className="guest-btn-container">
						<CustomButton color="gray" large text={Lang.format('KeepAGuest')} />
					</div>
				</div>
			</div>
			</>
		);
	}
}

export default Login;
