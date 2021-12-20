import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import Homepage from './components/homepage';
import Session from './components/session';

const Bogart = () => (
    <Switch>
        <Route exact path='/' component={Homepage} />
        <AuthRoute exact path='/login' component={Session} />
        <AuthRoute exact path='/signup' component={Session} />
        {/* <ProtectedRoute path='/pictures/new' component={PictureNewContainer} />  */}
    </Switch>
);

export default Bogart;