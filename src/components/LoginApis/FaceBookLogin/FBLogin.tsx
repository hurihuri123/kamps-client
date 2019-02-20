import axios from 'axios';
import { CustomButton } from 'nofshonit-base-web-client';
import * as React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Lang from '../../../config/Language';
import { LoginType } from '../../../models/enums';
interface Props {
    FBfinishLogin: (email: string, userID: string,loginType:LoginType,accessToken:string) => void,
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
     this.props.FBfinishLogin(user.email,user.userID,LoginType.Facebook,user.token);
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
