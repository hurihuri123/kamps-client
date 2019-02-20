import { Provider } from 'mobx-react';
import * as React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import rootStores from '../../stores';

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
