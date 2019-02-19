import * as React from 'react';
import Lang from '../../../../config/Language';

interface Props {
	onFirstTimeCliked: () => void;
}

class LoginHeader extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	onClick = () => {
		this.props.onFirstTimeCliked();
	};

	render() {
		return (
			<div className="login-header">
				<p className="login-header-log"> {Lang.format('Login')}</p>
				<div className="small-text-header">
					<p className="login-header-small">{Lang.format('KeepToLogin')}</p>
				</div>
				<div className="first-time-container">
					<span className="login-first" onClick={this.onClick}>
						{Lang.format('FirstTime')}
					</span>
				</div>
			</div>
		);
	}
}

export default LoginHeader;
