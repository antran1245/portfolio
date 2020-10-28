import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './HomeComponent';

class Main extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route path='/portfolio' component={() => <Home />} />
                    <Redirect to='/portfolio' />
                </Switch>
            </div>
        );
    }
}

export default Main;