import {action, observable} from 'mobx';
import ContactService from '../services/ContactService';

export default class ContactStore {

	@observable
	fullName: string;

	@observable
	email: string;

	@observable
	phoneNumber: string;

	@observable
	descreption: string;

	@observable
	optionSelected: string;

	@action
	setFullName(name: string) {
		this.fullName = name;
	}

	@action
	setEmail(email: string) {
		this.email = email;
	}

	@action
	setPhoneNumber(phone: string) {
		this.phoneNumber = phone;
	}

	@action
	setOption(option: string) {
		this.optionSelected = option;
	}

	@action
	setDescreption(descreption: string) {
		this.descreption = descreption;
	}

    @action
    getContactOptions(): string[] {
        return ["option1", "option2"];
    }

	@action
    sendContactRequest() {
		return ContactService.sendContactRequest(this.fullName, this.phoneNumber, this.descreption, this.email);
	}
}