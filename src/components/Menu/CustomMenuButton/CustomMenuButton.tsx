import * as React from 'react';
import {MenuButtonType} from '../../../models/enums';

interface Props {
    divClasName: string,
    text: string;
    onClick?: () => void,
    blackColor?: boolean;
    type: MenuButtonType;
}

interface IState {}

export default class CustomMenuButton extends React.Component<Props, IState>{

    constructor(props) {
        super(props);

        this.state = {
        };
    }


    render() {
        const buttonText = this.props.text;
        const blackButton = this.props.blackColor ? 'black' : '';
        const isNavbar = this.props.type === MenuButtonType.navBarButton;
        const menuClass = isNavbar ? 'nav-bar-button' : 'side-bar-button';

        return (
            <div className={this.props.divClasName}>
                <button className={`custom-menu ${menuClass} ${blackButton}`}>
                    {buttonText}
                </button>
            </div>
        )
    }
}