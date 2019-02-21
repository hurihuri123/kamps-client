import * as React from 'react';
import {Route} from 'react-router';
import ForgotPassword from '../../components/Login/ForgotPassword/ForgotPassword';
import LoginWithEmail from '../../components/Login/LoginWithEmail/LoginWithEmail';
import Login from '../../components/Login/MainLogin/Login';
import Register from '../../components/Login/Register/Register';
import UpdatePassword from '../../components/Login/UpdatePassword/UpdatePassword';
import WithoutEmail from '../../components/Login/WithoutEmail/WithoutEmail';
import {RoutesPath} from '../../consts/urlParams';

export default class LoginContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path={`/${RoutesPath.login}/${RoutesPath.withOutEmail}`} exact={false} component={WithoutEmail} />
        <Route path={`/${RoutesPath.login}/${RoutesPath.updatePassword}`} exact={false} component={UpdatePassword} />
        <Route path={`/${RoutesPath.login}/${RoutesPath.register}`} exact={false} component={Register} />
        <Route path={`/${RoutesPath.login}/${RoutesPath.forgotPassword}`} exact={false} component={ForgotPassword} />
        <Route path={`/${RoutesPath.login}/${RoutesPath.loginWithEmail}`} exact={false} component={LoginWithEmail} />
        <Route path={`/${RoutesPath.login}`} exact={true} component={Login} />
      </React.Fragment>
    )
  }
}