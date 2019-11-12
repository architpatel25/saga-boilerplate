import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
//components
const Home = React.lazy(() => import('./components/home'));
const Header = React.lazy(() => import('./components/header'));
const UserList = React.lazy(() => import('./components/users/usersList'));
const AddUser = React.lazy(() => import('./components/users/addUser'));
const UpdateUser = React.lazy(() => import('./components/users/updateUser'));

const Routes = () => {
    return (
        <Router history={createBrowserHistory()} >
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <br />
                <br />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/users' component={UserList} />
                    <Route path='/add-user' component={AddUser} />
                    <Route path='/update-user/:id' component={UpdateUser} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default Routes;
