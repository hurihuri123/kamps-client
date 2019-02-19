import  * as React from 'react'
import GoogleLogin  from 'react-google-login';
import axios from 'axios';
import {CustomButton} from 'nofshonit-base-web-client'
import Lang from '../../../config/Language';


interface Props {
    // TODO: Use email:string, token:string
    GooglefinishLogin: (email:string, token:string) => void,
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

        axios.post(`http://localhost:3000/users`, user)
            .then(res => this.setState({isLoggedIn:user.isLoogedIn,userID:user.userID,name:user.name,email:user.email,token:user.token}))
            .catch(err => console.log(err))

        this.checkUser(user.email, user.token);

    }

    onClick =()=>console.log('google buttun clicked')

    checkUser = (email:string,token:string)=>{
        if(token) this.props.GooglefinishLogin(email,token);
        else this.props.onError();
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

{/* <GoogleLog
            className ="google-button"
                clientId="925224063993-lj2is3nhb8rb251amdh8ppc5titjc5bi.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            /> */}