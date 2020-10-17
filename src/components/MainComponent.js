import React, {Component} from 'react';
import NavbarHeader from './NavbarComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './HomeComponent';
import AboutMe from './AboutMeComponent';
import Contact from './ContactComponent';

class Main extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route path='/home' component={() => <Home />} />
                    <Route exact path='/aboutme' component={() => <AboutMe/>} />
                    <Route exact path='/contact' component={() => <Contact/>} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}

export default Main;