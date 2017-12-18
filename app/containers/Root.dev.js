import PropTypes from 'prop-types';
import React from 'react';
/* element which connect react element and its descendants to single redux store */
import {Provider} from 'react-redux';
/* components based router for web browser */
import {Route} from 'react-router-dom';
/* helps router work with redux store, every route change will equal to an action dispached to the store */
import {ConnectedRouter} from 'react-router-redux';

import App from '../components/App';
import DevTools from './DevTools';

export default function Root({store, history}) {
    return (
        /* store is one single redux store avaliable to 'connect' for every descendant of provider */
        <Provider store={store}>
            <div>
                /* can handle only one child element, you can use Switch component inside. 
                Keep your app components isoleted from router so you can use them on server(tests...) */
                <ConnectedRouter history={history}>
                    <Route path="/" component={App}/>
                </ConnectedRouter>
                <DevTools/>
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
