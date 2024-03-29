import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/main.scss';

ReactDOM.render(<App/>, document.getElementById('root') as HTMLElement);
registerServiceWorker();
