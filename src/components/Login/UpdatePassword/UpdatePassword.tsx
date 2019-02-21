import { CustomButton, CustomInputText, TextTypes } from 'nofshonit-base-web-client';
import * as React from 'react';
import Lang from '../../../config/Language';
import { AUTH_STORE } from '../../../consts/stores';
import rootStores from '../../../stores';
import AuthStore from '../../../stores/AuthStore';

interface Props {
	email: string;
}

interface IState {
	password: string;
	confirmedPassword: string;
	passwordError?:string;
	confirmError?:string;
}
const authStore: AuthStore = rootStores[AUTH_STORE];

export default class UpdatePassword extends React.Component<Props, IState> {
	constructor(props: Props) {
		super(props);
		this.state = {
			password: '',
			confirmedPassword: ''
		};
	}

	handlepasswordInput = (value) => {
		this.clearError();
		const password = value;
		this.setState({ password: password });
	};

	handleconfirmedPasswordInput = (value) => {
		this.clearError();
		const confirmedPassword = value;
		this.setState({ confirmedPassword: confirmedPassword });
	};

	onClick = () => {
		if(this.validate()){
		authStore.changePassword(this.state.password);

		}else{
			console.log('passwords not match'); //need to check the validation with Nofshonit

		}
	
	
	
	}
	
		validate=()=>{
	
			if(this.state.password.length===0){
				this.setState({passwordError:Lang.format('PasswordError')});
				return false;
			}
			if(this.state.confirmedPassword.length===0){
				this.setState({confirmError:Lang.format('PasswordError')});
				return false;
			}
			if(this.state.password!==this.state.confirmedPassword){
				this.setState({confirmError:Lang.format('PasswordsNotMatch')})
				return false;
			}
			return true;
		}
	
		clearError = ()=>{
			this.setState({confirmError:undefined});
			this.setState({passwordError:undefined});
		}
		
			render() {
				const {password,confirmedPassword,confirmError,passwordError} =this.state
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
									error={passwordError}
									placeholder={Lang.format('Password')}
								/>
								<CustomInputText
									type={TextTypes.Password}
									onChange={this.handleconfirmedPasswordInput}
									error={confirmError}
									value={confirmedPassword}
									placeholder={Lang.format('ConfirnmedPassword')}
								/>
								<CustomButton onClick={this.onClick} color="black" large text={Lang.format('ChangePassword')} />
							</div>
						</div>
					</div>
				);
			}
		};


	
