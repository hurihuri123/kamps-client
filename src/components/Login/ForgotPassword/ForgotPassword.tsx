import { CustomButton, CustomInputText, TextTypes } from 'nofshonit-base-web-client';
import * as React from 'react';
import Lang from '../../../config/Language';
import { AUTH_STORE, USER_STORE } from '../../../consts/stores';
import { RoutesPath } from '../../../consts/urlParams';
import rootStores from '../../../stores';
import AuthStore from '../../../stores/AuthStore';
import UserStore from '../../../stores/UserStore';
interface Props {
	history: any;
}
interface IState {
	email: string;
}

const userStore: UserStore = rootStores[USER_STORE];
const authStore: AuthStore = rootStores[AUTH_STORE];

class ForgotPassword extends React.Component<Props, IState> {
	private history;
	constructor(props: Props) {
		super(props);
		this.history = this.props.history;
		this.state = {
			email: ''
		};
	}

	handleInput = (value) => {
		const email = value;
		this.setState({ email: email });
	};

	onClick = () => {
		authStore.sendForgotPassword(this.state.email);
		userStore.currentUser.email = this.state.email;
		this.history.replace(`${RoutesPath.updatePassword}`);
	};

	render() {
		const email = this.state.email;
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
