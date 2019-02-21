import { CustomButton, CustomInputText, TextTypes } from 'nofshonit-base-web-client';
import * as React from 'react';
import Lang from '../../../config/Language';
import { AUTH_STORE } from '../../../consts/stores';
import { RoutesPath } from '../../../consts/urlParams';
import rootStores from '../../../stores';
import AuthStore from '../../../stores/AuthStore';
import { isNullOrUndefined } from 'util';
import { LoginType } from '../../../models/enums';

interface Props {
	history?: any;
}
interface IState {
	email: string;
	password: string;
	emailError?:string;
	passwordError?:string;
}
const authStore: AuthStore = rootStores[AUTH_STORE];

class LoginWithEmail extends React.Component<Props, IState> {
	private history;

	constructor(props: Props) {
		super(props);
		this.history = this.props.history;
		this.state = {
			email: '',
			password: ''
		};
	}

	handleForgotClicked = () => {
		this.history.replace(`/${RoutesPath.login}/${RoutesPath.forgotPassword}`);
	};

	onLoginWithEmailClicked = () => {
	 //need to check if the user exsist.
		if (this.validate())
		 authStore.loginWithEmailAndPass(this.state.email, this.state.password, LoginType.EmailAndPass);
		else {
			console.log('you need to enter a input!!!'); //need to know what is the message.
		}
	};

	handleEmailInput = (value) => {
		this.clearError();
		const email = value;
		this.setState({ email: email });
	};

	handlePasswordInput = (value) => {
		this.clearError();
		const password = value;
		this.setState({ password: password });
	};
	validate = ()=>{
		if(this.state.email.length===0){
			this.setState({emailError:Lang.format('EmailError')})
			return false;
		}
						if(this.state.password.length===0){
							this.setState({passwordError:Lang.format('PasswordError')})
							return false;
						}

		return true;
	}

	clearError = ()=>{
		this.setState({emailError:undefined});
		this.setState({passwordError:undefined})
	}

	render() {
	const {email,password,emailError,passwordError} =this.state;
		return (
			<div className="login-with-email-contanier">
				<div className="login-with-email-text">
					<p className="login-with-email-text-item">{Lang.format('LoginWithEmail2')}</p>
				</div>
				<div className="elements-container">
					<div className="input-container">
						<CustomInputText
							type={TextTypes.Email}
							value={email}
							error={emailError}
							onChange={this.handleEmailInput}
							placeholder={Lang.format('EmailAddress')}
						/>
						<CustomInputText
							type={TextTypes.Password}
							value={password}
							error={passwordError}
							onChange={this.handlePasswordInput}
							placeholder={Lang.format('Password')}
						/>
					</div>
					<div className="btn-login-with-email">
						<CustomButton
							onClick={this.onLoginWithEmailClicked}
							color="black"
							large
							text={Lang.format('Login')}
						/>

						<div className="withEmail-forgotpassword-container">
							<a className="with-email-forgot-password" onClick={this.handleForgotClicked}>
								{Lang.format('ForgotPassowrd')}
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginWithEmail;
