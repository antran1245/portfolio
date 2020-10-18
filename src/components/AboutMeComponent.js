import React, {Component} from 'react';
import {Collapse, Card, CardText, CardHeader, CardBody, CardTitle, Button} from 'reactstrap';
import NavbarHeader from './NavbarComponent';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card1: false,
            card2: false,
            card3: false
        };

        this.toggleCard = this.toggleCard.bind(this);
    }

    toggleCard(card, state) {
        this.setState({
            [card]: state
        });
    }

    render() {
        return(
            <div className="background_image aboutme">
                <div className="d-block d-sm-none">
                    <NavbarHeader />
                </div>
                <div className="container aboutme_layout">
                    <div className="row">
                        <div className="col-12 col-sm-12 ml-sm-4">
                            <Card>
                                <Button className="d-block d-sm-none" onClick={() => this.toggleCard("card1", !this.state.card1)}>
                                    <h4>Bio</h4>
                                </Button>
                                <Collapse isOpen={this.state.card1} className="d-sm-block">
                                    <CardHeader className="d-none d-sm-block">
                                        <h4>Bio</h4>
                                    </CardHeader>
                                    <CardBody className="text-left">
                                        <p>Recently graduated web developer. I enjoy making websites and is always up to learning new skills and technique. Enjoy 
                                            spending time figuring mysterious and possible ways to create an element design.
                                        </p>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 ml-sm-4 mt-sm-3">
                            <Card>
                                <Button className="d-block d-sm-none" onClick={() => this.toggleCard("card2", !this.state.card2)}>
                                    <h4>Skills (Framework, Library, Language)</h4>
                                </Button>
                                <Collapse isOpen={this.state.card2} className="d-sm-block">
                                    <CardHeader className="d-none d-sm-block">
                                        <h4>Skills (Framework, Library, Language)</h4>
                                    </CardHeader>
                                    <CardBody className="text-left">
                                        <ul>
                                            <li>HTML</li>
                                            <li>Javascript</li>
                                            <li>CSS</li>
                                            <li>Python</li>
                                            <li>React.js</li>
                                            <li>Bootstrap</li>
                                            <li>JQuery</li>
                                        </ul>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 ml-sm-4 mt-sm-3">
                            <Card>
                                <Button className="d-block d-sm-none" onClick={() => this.toggleCard("card3", !this.state.card3)}>
                                    <h4>Personality</h4>
                                </Button>
                                <Collapse isOpen={this.state.card3} className="d-sm-block">
                                    <CardHeader className="d-none d-sm-block">
                                        <h4>Personality</h4>
                                    </CardHeader>
                                    <CardBody className="text-left">
                                        <ul>
                                            <li>Always desire to be positive.</li>
                                            <li>Hard working.</li>
                                            <li>Capable of handling multiple tasks.</li>
                                            <li>Never give up.</li>
                                        </ul>
                                    </CardBody>
                                </Collapse>
                            </Card>
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

export default AboutMe;