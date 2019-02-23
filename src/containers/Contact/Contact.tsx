import {observer} from 'mobx-react';
import {CustomButton, CustomInputText, CustomTextArea, CustomSelector} from 'nofshonit-base-web-client';
import * as React from 'react';
import Lang from "../../config/Language";
import {CONTACT_STORE} from '../../consts/stores';
import rootStores from '../../stores';
import ContactStore from '../../stores/ContactStore';

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
export default class Contact extends React.Component<Props, IState> {

    constructor(props) {
        super(props);
        this.state = {
            fullNameError: '',
            phoneNumberError: '',
            descreptionError: '',
            emailError: '',
            optionSelectedError: '',
        }
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
        this.setState({fullNameError :''});
    };

    sendMessageClicked = () => {
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

    // {/* // TODO: Add menu & footer */}
    render() {
        const {fullName, phoneNumber, descreption, email, optionSelected} = contactStore;
        return (
            <div className={"contact-container"}>
                <div className={"padding-container"}>
                    <div className={"inputs-container"}>

                        <div className={"contact-title"}>
                            {Lang.format("ContactFormTitle")}
                        </div>

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

                    </div>

                    <div className={"contact-info-container"}>

                        <div className={"contact-info-row"}>
                            <span className={"contact-info-title"}>{Lang.format("ContactQuestions")}</span>
                            <span className={"contact-info-text"}>
                                {Lang.format("ContactAnswers")}
                                {/* // TODO: Make component for links in base project */}
                                <a href={"https://www.google.co.il/"}>{Lang.format("ContactAnswersLocation")}</a>
                            </span>
                        </div>

                        <div className={"contact-info-row"}>
                            <span className={"contact-info-title"}>{Lang.format("ContactTimesTitle")}</span>
                            <span className={"contact-info-text"}>{Lang.format("ContactTimes") + " 8:30-17:00 "}</span>
                        </div>

                        <div className={"contact-info-row"}>
                            <span className={"contact-info-title"}>{Lang.format("ContactPrivateCustomersPhoneTitle")}</span>
                            <span className={"contact-info-text"}>03-5234754</span>
                        </div>

                        <div className={"contact-info-row"}>
                            <span className={"contact-info-title"}>{Lang.format("ContactBusinessCustomersPhoneTitle")}</span>
                            <span className={"contact-info-text"}>03-5234757</span>
                        </div>

                        <div className={"contact-info-row"}>
                            <span className={"contact-info-title"}>{Lang.format("ContactChatWithUs")}</span>
                            <a href={"https://www.google.co.il/"}>{Lang.format("ContactStartChat")}</a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}