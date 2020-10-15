import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse, Button} from 'reactstrap';

class NavbarHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return(
            <div>
                <Navbar expand="md" light color="light" className="d-block d-sm-none">
                    <div className="container">
                    <NavbarBrand className="mr-auto" href="/">An Tran</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav}/>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="text-left" navbar>
                            <NavItem>
                                <NavLink href="#"><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#"><span className="fa fa-info fa-lg"></span> About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#"><span className="fa fa-phone fa-lg"></span> Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </div>
                </Navbar>
                <div className="container d-none d-sm-block button_Navbar">
                    <div className="row">
                        <div className="col-sm-3 offset-sm-1">
                            <Button color="primary" block>Home</Button>
                        </div>
                        <div className="col-sm-3 offset-sm-1">
                            <Button color="primary" block>About Me</Button>
                        </div>
                        <div className="col-sm-3 offset-sm-1">
                            <Button color="primary" block>Contact</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavbarHeader;