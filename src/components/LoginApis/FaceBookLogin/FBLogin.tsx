import axios from 'axios';
import { CustomButton } from 'nofshonit-base-web-client';
import * as React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Lang from '../../../config/Language';
interface Props {
    FBfinishLogin: (email: string, userID: string) => void,
    onError: () => void
}
interface IState {
    isLoogedIn: boolean;
    userID: string;
    name: string;
    email: string;
    token: string;
}

// TODO: Move this file to new folder named "3rdPartyAuthButtons"


// TODO: Remove this export
export class FBLogin extends React.Component<Props, IState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isLoogedIn: false,
            userID: '',
            name: '',
            email: '',
            token: '',
        }
    }


    responseFacebook = (response: any) => {
        const user = {
            isLoogedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            token: response.accessToken
        }
        console.log(user);
        // TODO: Change this to use ****Service (class)
        axios.post(`http://localhost:3000/users`, user)
            .then(res => this.setState(user))
            .catch(err => console.log(err))
        this.checkUser(user.email, user.userID);
    }

    checkUser = (email: string, userID: string) => {
        if (userID) {
            this.props.FBfinishLogin(email, userID);
        } else {
            this.props.onError();
        }
    }

    componentClicked = () => console.log("facebook clicked");

    render() {
      
        let fbContent;

        // we connected to facebook 
        if (this.state.isLoogedIn) {
            // TODO: Change this to renderFunction and not just variable
            fbContent = (
                <div
                    style={{
                        width: "400px",
                        margin: "auto",
                        background: "#f4f4f4",
                        padding: "20px"
                    }}>
                    <h2>Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                </div>
            );
            // we couldnt able to connect 
        } else {
            // TODO: Change this to renderFunction and not just variable
            fbContent = (<FacebookLogin
                appId="2180334285362272"
                autoLoad={false} 
                callback={this.responseFacebook}
                fields="name,email"
                render={renderProps => (
                    <div>
                    <CustomButton onClick={renderProps.onClick} color="gray"  large text={Lang.format('FaceBook')} />
                </div>
                )}
              />);
              
        }
        return (
            <div className="fb-button">
                {fbContent}
            </div>
        )
    }
}

export default FBLogin;
// {/* <FacebookLog
//                 appId="2180334285362272"
//                 autoLoad={false}
//                 fields="name,email"
//                 onClick={this.componentClicked}
//                 callback={this.responseFacebook}
//                /> */}