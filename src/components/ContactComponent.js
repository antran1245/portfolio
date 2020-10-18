import React, {Component} from 'react';
import {Card, CardBody, CardHeader} from 'reactstrap';
import NavbarHeader from './NavbarComponent';

class Contact extends Component {
    render() {
        return (
            <div className="background_image contact">
                <div className="d-block d-sm-none">
                    <NavbarHeader />
                </div>
                <div className="container contact_layout">
                    <div className="row">
                        <div className="col-12">
                        
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

export default Contact;