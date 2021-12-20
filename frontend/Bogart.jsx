import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import Dashboard from './components/dashboard';

const Bogart = () => (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        {/* <AuthRoute exact path='/signup' component={SignUpContainer} /> */}
        {/* <ProtectedRoute path='/pictures/new' component={PictureNewContainer} />  */}
    </Switch>
);

export default Bogart;