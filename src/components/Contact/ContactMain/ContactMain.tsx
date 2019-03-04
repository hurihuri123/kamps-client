import * as React from 'react';
import Lang from '../../../config/Language';
import ContactInfo from '../ContactInfo/ContactInfo';
import ContactInputs from '../ContactInputs/ContactInputs';

interface Props {
	options: string[];
}

interface IState {}

export default class ContactMain extends React.Component<Props, IState> {
	render() {
		return (
			<div className={'contact-container'}>
				<div className={'padding-container'}>
					<div className={'inputs-container'}>
						<div className={'contact-title'}>
							{Lang.format('ContactFormTitle')}
						</div>
						<ContactInputs options={this.props.options} />
					</div>

					<div className={'contact-info-container'}>
						<ContactInfo />
					</div>
				</div>
			</div>
		);
	}
}
