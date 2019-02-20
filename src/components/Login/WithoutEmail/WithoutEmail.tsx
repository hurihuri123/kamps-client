import {CustomButton} from 'nofshonit-base-web-client';
import * as React from 'react';
import Lang from '../../../config/Language';

export default class WithoutEmail extends React.Component {
	onClick = () => {
		console.log('WithoutEmail Clicked'); //need to send the data to the server and compare
	};

	handleInput = (e) => {
		console.log(e.target.value);
	};

	render() {
		return (
			<div>
				<div className="forgot-contanier">
					<p className="forgot-text-large">{Lang.format('ForgotYourPassword')}</p>
					<p className="forgot-text-small">{Lang.format('Enter_Your_Email_Address')}</p>
					<div className="forgot-form">
						<div className="without-email-input">
							{/* <CustomInputText
								type={TextTypes.Text}
								onChange={this.handleInput} 
								placeholder={Lang.format('EmailAddress')}
							/> */}
						</div>
						<CustomButton
							onClick={this.onClick}
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


