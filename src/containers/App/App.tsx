import { Provider } from 'mobx-react';
import * as React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from '../../components/Login/MainLogin/Login';
import { RoutesPath } from '../../consts/urlParams';
import rootStores from '../../stores';
import { CustomButton } from 'nofshonit-base-web-client';
import LoginHeader from '../../components/Login/MainLogin/LoginHeader';
import LoginWithEmail from '../../components/Login/LoginWithEmail/LoginWithEmail';
import ForgotPassword from '../../components/Login/ForgotPassword/ForgotPassword';
import LoginContainer from '../Login/LoginContainer';
interface IProps {}

interface IState {}

export default class App extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {};
	}

	click = () => console.log('blabla');
	render() {
		return (
			<Provider {...rootStores}>
				<BrowserRouter>
					<Switch>
						<LoginContainer />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}
