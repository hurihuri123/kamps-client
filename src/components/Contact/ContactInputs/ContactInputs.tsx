import {observer} from 'mobx-react';
import {CustomButton, CustomInputText, CustomTextArea, CustomSelector} from 'nofshonit-base-web-client';
import * as React from 'react';
import Lang from "../../../config/Language";
import {CONTACT_STORE} from '../../../consts/stores';
import rootStores from '../../../stores';
import ContactStore from '../../../stores/ContactStore';

interface Props {
    options: string[],
}

interface IState {
    fullNameError: string;
    phoneNumberError: string,
    descreptionError: string,
    emailError: string,
    optionSelectedError: string,
}

const contactStore: ContactStore = rootStores[CONTACT_STORE];
@observer
export default class ContactInputs extends React.Component<Props, IState> {

    constructor(props) {
        super(props);
        this.initStates();
    }

    validate = () => {
        // Variable Definition
        const {fullName, phoneNumber, descreption, email, optionSelected} = contactStore;
        let retval = true;

        // Code Section
        if(!fullName || !fullName.length){
            this.setState({fullNameError : "fullNameError"});
            retval = false;
        }
        if(!phoneNumber || !phoneNumber.length) {
            this.setState({phoneNumberError : "phoneNumberError"});
            retval = false;
        }
        if(!descreption || !descreption.length) {
            this.setState({descreptionError : "descreptionError"});
            retval = false;
        }
        if(!email || !email.length) {
            this.setState({emailError : "emailError"});
            retval = false;
        }
        if(!optionSelected || !optionSelected.length) {
            this.setState({optionSelectedError : "optionSelectedError"});
            retval = false;
        }

        return retval;
    };

    clearError = ()=>{
        this.initStates();
    };

    initStates(): void {
        this.state = {
            fullNameError: '',
            phoneNumberError: '',
            descreptionError: '',
            emailError: '',
            optionSelectedError: '',
        };
    }

    sendMessageClicked = () => {
        // Code Section
        this.clearError();

        if (this.validate()) {
            contactStore.sendContactRequest()
                .then(res => {
                    console.log(res);
                    //TODO:info dialog with thank you for contact us
                })
                .catch(err => {
                    //TODO: Error Dialog .
                })
        }
    };

    // Handle input changes
    onFullNameChange = (value) => {
        contactStore.setFullName(value);
    };

    onEmailChange = (value) => {
        const email = value;
        contactStore.setEmail(email);
    };

    onDescriptionChange = (value) => {
        const desc = value;
        contactStore.setDescreption(desc);
    };

    onPhoneNumberChange = (value) => {
        const phone = value;
        contactStore.setPhoneNumber(phone);
    };

    optionSelected = (value) => {
        const selctedVal = value;
        contactStore.setOption(selctedVal);
    };


    render() {
        const {fullName, phoneNumber, descreption, email, optionSelected} = contactStore;
        return (
                        <div>
                            <CustomSelector value={optionSelected} error={this.state.optionSelectedError} placeholder={Lang.format('ContactCustomWhichIssuse')}
                                            onSelected={this.optionSelected} isPrimitiveValue={true} addEmptyValue={true} options={this.props.options} />

                            <CustomInputText value={fullName} error={this.state.fullNameError}
                                             placeholder={Lang.format('ContactCustomerInputFullName')} onChange={this.onFullNameChange} />

                            <CustomInputText value={email} error={this.state.emailError}
                                             placeholder={Lang.format('EmailAddress')} onChange={this.onEmailChange} />

                            <CustomInputText value={phoneNumber} error={this.state.phoneNumberError} placeholder={Lang.format('ContactCustomerPhoneNumber')} onChange={this.onPhoneNumberChange} />

                            <CustomTextArea rows={4} value={descreption}  onChange={this.onDescriptionChange} placeholder={Lang.format('HowCantIHelpYou')} />

                            <CustomButton onClick={this.sendMessageClicked} text={Lang.format('SendMessage')} color={'gray'}/>
                        </div>
        )
    }
}