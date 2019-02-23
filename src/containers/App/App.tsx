import {Provider} from 'mobx-react';
import * as React from 'react';
import {Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import rootStores from '../../stores';
import TomTestPage from '../TomTestPage/TomTestPage';
import Contact from "../Contact/Contact";

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
						<Contact/>
						{/*<TomTestPage />*/}
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}
