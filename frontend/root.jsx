import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Bogart from './Bogart';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <Bogart/>
        </HashRouter>
    </Provider>
);

export default Root;
