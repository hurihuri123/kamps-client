
import * as React from 'react';
import Contact from "../Contact/Contact";
import MenuNavigation from "../MenuNavigation/MenuNavigation";
import {CONTACT_STORE} from "../../consts/stores";
import {observer} from "mobx-react";
import ContactStore from "../../stores/ContactStore";
import rootStores from "../../stores";


interface Props {
}

interface IState {
}

const contactStore: ContactStore = rootStores[CONTACT_STORE];
@observer
export default class ContactPage extends React.Component<Props, IState> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MenuNavigation/>
                <Contact options={contactStore.getContactOptions()}/>
            </div>
        )
    }
}