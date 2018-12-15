import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Registration from './Registration';

export class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/register' component={Registration} />
                    <Route path='/login' component={Login} />
                </Switch>
            </main>
        )
    }
}

export default Main;
