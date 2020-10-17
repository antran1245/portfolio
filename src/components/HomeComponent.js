import React, {Component} from 'react';
import NavbarHeader from './NavbarComponent';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div className="background_image home">
                <div className="container home_layout">
                    <div className="row">
                        <div className="col-12">
                            <h1>Home</h1>
                        </div>
                    </div>
                    
                </div>
                <NavbarHeader />
            </div>
        );
    }
}

export default Home;