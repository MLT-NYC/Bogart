import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Root from './root';

document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            users: { [window.currentUser.id]: window.currentUser },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    ReactDOM.render(<Root store={store} />, root)
});