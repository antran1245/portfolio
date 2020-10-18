import React, {Component} from 'react';
import NavbarHeader from './NavbarComponent';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div className="background_image home">
                <div className="d-block d-sm-none">
                    <NavbarHeader />
                </div>
                <div className="container home_layout">
                    <div className="row">
                        <div className="col-12 col-sm-12 ml-sm-4">
                            <h1 style={{fontSize:"80px", fontWeight:"bold"}}>Hello</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 ml-sm-4">
                            <h2 style={{fontSize:"60px"}}>My Name Is An Tran</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 ml-sm-4">
                            <h2 style={{fontSize:"60px"}}>I'm a Coder</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 ml-sm-4">
                            <h2 style={{fontSize:"60px"}}>I'm a Web Designer</h2>
                        </div>
                    </div>
                    <div className="row mt-sm-5 mt-3">
                        <div className="col-12 col-sm-4">
                            <p>Located in California.</p>
                        </div>
                        <div className="col-12 col-sm-4 offset-sm-4">
                        <a href="#"><p><i className="fa fa-envelope-o fa-lg"></i> example1245@gmail.com</p></a>
                        </div>
                    </div>
                </div>
                <div className="d-none d-sm-block">
                    <NavbarHeader />
                </div>
            </div>
        );
    }
}

export default Home;