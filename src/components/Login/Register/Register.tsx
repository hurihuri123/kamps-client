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
		if (this.state.password === this.state.confirmPassword) {
			authStore.register(this.state.email, this.state.password);
		}
	};

	EmailhandleInput = (value) => {
		const email = value;
		this.setState({ email: email });
	};
	PasswordhandleInput = (value) => {
		const password = value;
		this.setState({ password: password });
	};
	ConfiermedPasswordhandleInput = (value) => {
		const confirmPassword = value;
		this.setState({ confirmPassword: confirmPassword });
	};

	moveToPrivatePolicy = () => {
		console.log('need chang page to privatePolicy');
	};
	render() {
		const email = this.state.email;
		const password = this.state.password;
		const confirmPassword = this.state.confirmPassword;
		return (
			<div className="register-contanier">
				<div className="register-text">
					<p className="register-text-item">{Lang.format('RegisterWithEmail')}</p>
				</div>
				<div className="register-input-container">
					<CustomInputText
						type={TextTypes.Email}
						nofshonit
						onChange={this.EmailhandleInput}
						value={email}
						placeholder={Lang.format('EmailAddress')}
					/>
					<CustomInputText
						type={TextTypes.Password}
						nofshonit
						onChange={this.PasswordhandleInput}
						value={password}
						placeholder={Lang.format('Password')}
					/>
					<CustomInputText
						type={TextTypes.Password}
						nofshonit
						onChange={this.ConfiermedPasswordhandleInput}
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
