import { CustomButton, CustomInputText, TextTypes } from 'nofshonit-base-web-client';
import * as React from 'react';
import Lang from '../../../config/Language';
import { AUTH_STORE } from '../../../consts/stores';
import rootStores from '../../../stores';
import AuthStore from '../../../stores/AuthStore';

interface IState {
	email: string;
	password: string;
	confirmPassword: string;
	emailError?:string;
	passwordError?:string;
	confirmError?:string
}
interface Props {}

const authStore: AuthStore = rootStores[AUTH_STORE];
export default class Register extends React.Component<Props, IState> {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	registerClicked = () => {
		if (this.validate()) {
			authStore.register(this.state.email, this.state.password);
		}else{
			console.log('not valide');
		}
	};

	EmailhandleInput = (value) => {
		this.clearError();
		const email = value;
		this.setState({ email: email });
	};
	PasswordhandleInput = (value) => {
		this.clearError();
		const password = value;
		this.setState({ password: password });
	};
	ConfiermedPasswordhandleInput = (value) => {
		this.clearError();
		const confirmPassword = value;
		this.setState({ confirmPassword: confirmPassword });
	};

	moveToPrivatePolicy = () => {
		console.log('need chang page to privatePolicy');
	};

	validate=()=>{

		if(this.state.email.length===0){
			this.setState({emailError:Lang.format('EmailError')});
			return false;
		}
	
		if(this.state.password.length===0){
			this.setState({passwordError:Lang.format('PasswordError')});
			return false;
		}
		if(this.state.confirmPassword.length===0){
			this.setState({confirmError:Lang.format('PasswordError')});
			return false;
		}
		if(this.state.password!==this.state.confirmPassword){
			this.setState({confirmError:Lang.format('PasswordsNotMatch')})
			return false;
		}
		return true;
	}

	clearError = ()=>{
		this.setState({emailError:undefined});
		this.setState({confirmError:undefined});
		this.setState({passwordError:undefined});
	}
	render() {
		const {email,passwordError,confirmError,confirmPassword,emailError,password} = this.state; 
		return (
			<div className="register-contanier">
				<div className="register-text">
					<p className="register-text-item">{Lang.format('RegisterWithEmail')}</p>
				</div>
				<div className="register-input-container">
					<CustomInputText
						type={TextTypes.Email}
						onChange={this.EmailhandleInput}
						value={email}
						error={emailError}
						placeholder={Lang.format('EmailAddress')}
					/>
					<CustomInputText
						type={TextTypes.Password}
						onChange={this.PasswordhandleInput}
						error={passwordError}
						value={password}
						placeholder={Lang.format('Password')}
					/>
					<CustomInputText
						type={TextTypes.Password}
						onChange={this.ConfiermedPasswordhandleInput}
						error={confirmError}
						value={confirmPassword}
						placeholder={Lang.format('ConfirnmedPassword')}
					/>
					<CustomButton
						onClick={this.registerClicked}
						color="black"
						large
						text={Lang.format('RegisterToNof')}
					/>

					<div className="private-policy">
						<span>{Lang.format('OnCreate')}</span>
						<span className="line1-private">{Lang.format('Limits')}</span>

						<div className="private-policy-text-container">
							<span>{Lang.format('And')}</span>
							<span className="line2-private">{Lang.format('Prtiot')}</span>
							<span>{Lang.format('ForUs')}</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
