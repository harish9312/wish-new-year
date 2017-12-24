import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { HashRouter, Switch } from 'react-router-dom';

import { UserForm } from './components/UserForm/index';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store/index';
import { App } from './App';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/:id" exact={true} component={App} />
        <Route path="/get-link" exact={true} component={App} />
        <Route path="/" exact={true} component={UserForm} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();