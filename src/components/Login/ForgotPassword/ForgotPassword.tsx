import { CustomButton, CustomInputText, TextTypes } from 'nofshonit-base-web-client';
import * as React from 'react';
import Lang from '../../../config/Language';
import { AUTH_STORE, USER_STORE } from '../../../consts/stores';
import { RoutesPath } from '../../../consts/urlParams';
import rootStores from '../../../stores';
import AuthStore from '../../../stores/AuthStore';
import UserStore from '../../../stores/UserStore';
import { isNullOrUndefined } from 'util';
interface Props {
	history: any;
}
interface IState {
	email: string;
	emailError?: string;
}

const userStore: UserStore = rootStores[USER_STORE];
const authStore: AuthStore = rootStores[AUTH_STORE];

class ForgotPassword extends React.Component<Props, IState> {
	private history;
	constructor(props: Props) {
		super(props);
		this.history = this.props.history;
		this.state = {
			email: '',
			
		};
	}

	handleInput = (value) => {
		this.clearError();
		const email = value;
		this.setState({ email: email });
	};

	onClick = () => {
		if (this.validate()) {
		
			authStore.sendForgotPassword(this.state.email);
			userStore.currentUser.email = this.state.email;
			this.history.replace(`${RoutesPath.updatePassword}`);
		
		}else{
			
		console.log('validate error!!!')
		}
	};

	validate = () => {
		if (this.state.email.length === 0) {
			this.setState({ emailError: Lang.format('EmailError') });
			return false;
		}
		return true;
	};

	clearError = ()=>{
		this.setState({emailError:undefined});
	}
	render() {
		const { email, emailError } = this.state;
		return (
			<div>
				<div className="forgot-contanier">
					<div className="forgot-text-container">
						<p className="forgot-text-large">{Lang.format('ForgotYourPassword')}</p>
						<div className="small-text-container">
							<p className="forgot-text-small">{Lang.format('SendPasswordTOReplice')}</p>
						</div>
					</div>
					<div className="forgot-input-container">
						<div className="forgot-input-mail">
							<CustomInputText
								type={TextTypes.Email}
								value={email}
								error={emailError}
								onChange={this.handleInput}
								placeholder={Lang.format('EmailAddress')}
							/>
						</div>
						<CustomButton
							onClick={this.onClick}
							color="black"
							longText
							large
							text={Lang.format('SendToChangePassword')}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ForgotPassword;
