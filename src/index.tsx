import { Provider } from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as mobx from 'mobx';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { defaultStores } from "./stores/rootStore";

const stores = defaultStores;

mobx.configure({ enforceActions: 'observed' });

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
