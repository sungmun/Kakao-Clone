import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const render = () =>
  ReactDOM.render(<div>Hello World!</div>, document.getElementById(
    'root',
  ) as HTMLElement);

render();

registerServiceWorker();
