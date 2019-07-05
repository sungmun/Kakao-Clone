import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from './components/Base/Provider/RootStore';
import { RouteInitSetting } from './components/Base/Router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


const render = () =>
  ReactDOM.render(<Provider><RouteInitSetting /></Provider>, document.getElementById('root') as HTMLElement);

render();

registerServiceWorker();
