
import * as React from 'react';
import Lang from "../../../config/Language";

interface Props {
}

interface IState {
}

export default class ContactInfo extends React.Component<Props, IState> {

    constructor(props) {
        super(props);

    }

    render() {
        return (
                    <div className={"main-contact-info"}>

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
        )
    }
}