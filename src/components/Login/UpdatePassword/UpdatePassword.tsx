import * as React from 'react';
import Lang from '../../../../config/Language';
import AuthStore from '../../../../stores/AuthStore';
import { AUTH_STORE } from '../../../../consts/stores';
import rootStores from '../../../../stores';
import { CustomButton, CustomInputText, TextTypes } from 'nofshonit-base-web-client';

interface Props {
	email: string;
}

interface IState {
	password: string;
	confirmedPassword: string;
}
const authStore: AuthStore = rootStores[AUTH_STORE];

class UpdatePassword extends React.Component<Props, IState> {
	constructor(props: Props) {
		super(props);
		this.state = {
			password: '',
			confirmedPassword: ''
		};
	}

	handlepasswordInput = (value) => {
		const password = value;
		this.setState({ password: password });
	};

	handleconfirmedPasswordInput = (value) => {
		const confirmedPassword = value;
		this.setState({ confirmedPassword: confirmedPassword });
	};

	onClick = () => {
		if (this.state.password === this.state.confirmedPassword) {
			authStore.changePassword(this.state.password);
		} else {
			console.log('passwords not match'); //need to check the validation with Nofshonit
		}
	};

	render() {
		const password = this.state.password;
		const confirmedPassword = this.state.confirmedPassword;
		return (
			<div className="update-contanier">
				<div className="update-text-container">
					<div className="update-text-large-container">
						<p className="update-text-large">{Lang.format('UpdatePassword')}</p>
					</div>
					<div className="update-text-small-container">
						<p className="update-text-small">{Lang.format('WriteNewPassword')}</p>
					</div>
				</div>
				<div className="update-password-container">
					<div className="input-container">
						<CustomInputText
							type={TextTypes.Password}
							onChange={this.handlepasswordInput}
							value={password}
							nofshonit
							placeholder={Lang.format('Password')}
						/>
						<CustomInputText
							type={TextTypes.Password}
							onChange={this.handleconfirmedPasswordInput}
							value={confirmedPassword}
							nofshonit
							placeholder={Lang.format('ConfirnmedPassword')}
						/>
						<CustomButton onClick={this.onClick} color="black" large text={Lang.format('ChangePassword')} />
					</div>
				</div>
			</div>
		);
	}
}

export default UpdatePassword;
