
import {CustomButton, CustomInputText, CustomTextArea, CustomSelector} from 'nofshonit-base-web-client';
import * as React from 'react';
import Lang from "../../config/Language";
import ContactInputs from "../../components/Contact/ContactInputs/ContactInputs";
import ContactInfo from "../../components/Contact/ContactInfo/ContactInfo";

interface Props {
    options: string[],
}

interface IState {
}

export default class Contact extends React.Component<Props, IState> {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={"contact-container"}>
                <div className={"padding-container"}>
                    <div className={"inputs-container"}>

                        <div className={"contact-title"}>
                            {Lang.format("ContactFormTitle")}
                        </div>

                        <ContactInputs options={this.props.options}/>

                    </div>

                    <div className={"contact-info-container"}>
                        <ContactInfo/>
                    </div>
                </div>
            </div>
        )
    }
}