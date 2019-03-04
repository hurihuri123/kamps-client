import * as React from 'react';
import Contact from '../../components/Contact/ContactMain/ContactMain';
import MenuNavigation from '../MenuNavigation/MenuNavigation';
import {CONTACT_STORE} from '../../consts/stores';
import {observer} from 'mobx-react';
import ContactStore from '../../stores/ContactStore';
import rootStores from '../../stores';

interface Props {}

interface IState {}

const contactStore: ContactStore = rootStores[CONTACT_STORE];
@observer
export default class ContactContainer extends React.Component<Props, IState> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<MenuNavigation />
				<div className={'contact-page'}>
					<Contact options={contactStore.getContactOptions()} />
				</div>
			</>
		);
	}
}
