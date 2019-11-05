import React from 'react';
import { Router, Route, Switch } from 'react-router';
import history from './utils/history';

import Home from './components/home';
import Header from './components/header';
import UserList from './components/users/usersList';
import AddUser from './components/users/addUser';

const Routes = () => {
    return (
        <Router history={history} >
            <Header />
            <br />
            <br />
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/users' component={UserList} />
                    <Route path='/add-user' component={AddUser} />
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;
