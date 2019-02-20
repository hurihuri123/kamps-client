import  * as React from 'react'
import GoogleLogin  from 'react-google-login';
import axios from 'axios';
import {CustomButton} from 'nofshonit-base-web-client'
import Lang from '../../../config/Language';
import { LoginType } from '../../../models/enums';


interface Props {
    // TODO: Use email:string, token:string
    GooglefinishLogin: (email:string, token:string,loginType:LoginType,accessToken:string) => void,
    onError: () => void
}

interface IState {
    isLoggedIn: boolean;
    userID: string;
    name: string;
    email: string;
    token: string;
}

export default class GoogleLog extends React.Component<Props , IState> {
    
    constructor(props : Props)
    {
        super(props);
        this.state = {
            isLoggedIn: false,
            userID: '',
            name: '',
            email: '',
            token: ''
        }
    }


    responseGoogle = (response: any) => {
        console.log(response);

        const user = {
            isLoogedIn: true,
            userID: response.profileObj.userID,
            name: response.profileObj.name,
            email: response.profileObj.email,
            token: response.tokenId
        }

        if(user.email&&user.token){
            this.props.GooglefinishLogin(user.email,user.userID,LoginType.Google,user.token);
        }
      
        
    }
 onClick =()=>{
     console.log('user clicked on the btn');
 }
    render() {
        // TODO: Use render function instead of variable
        let gmailContent;

        if (this.state.isLoggedIn) {
            gmailContent = (
                <div
                    style={{
                        width: "400px",
                        margin: "auto",
                        background: "#f4f4f4",
                        padding: "20px"
                    }}>
                    <h2>Welcome {this.state.name}</h2>
                    <p>Email: {this.state.email}</p>
                    <p>Token: {this.state.token}</p>

                </div>
            );
        } else {
            gmailContent = (<GoogleLogin
                clientId="925224063993-lj2is3nhb8rb251amdh8ppc5titjc5bi.apps.googleusercontent.com"
                render={renderProps => (
                    <CustomButton onClick={this.onClick} color="gray" large text={Lang.format('Google')} />
                )}
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
              />)
        }
        return (
            <div>
                {gmailContent}
            </div>
        )
    }
}
