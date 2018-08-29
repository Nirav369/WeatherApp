import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store'

import './index.scss';
import App from '../src/component/container/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact={true} path={"/"} render={props => (<Redirect to={{ pathname: '/search', state: { from: props.location } }} />)} />
                <Route exact={true} path="/search" component={App} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
