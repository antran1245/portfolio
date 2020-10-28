import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './HomeComponent';

class Main extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route path='/home' component={() => <Home />} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}

export default Main;