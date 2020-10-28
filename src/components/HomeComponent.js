import React, {Component} from 'react';
import {Collapse, Card, CardText, CardHeader, CardBody, CardTitle, Button} from 'reactstrap';
import '../App.css';

class Home extends Component {
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
        return (
            <div>
                <div className="home">
                    <div className="container home_layout">
                        <div className="row">
                            <div className="col-12 col-sm-12 ml-sm-4">
                                <h1 style={{fontSize:"80px", fontWeight:"bold"}}>Hello</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12 ml-sm-4">
                                <h2 style={{fontSize:"60px"}}>I'm An Tran.</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12 ml-sm-4">
                                <h2 style={{fontSize:"60px"}}>Front End Web Designer</h2>
                            </div>
                        </div>
                        <div className="row mt-sm-5 mt-3">
                            <div className="col-12 col-sm-12">
                                <p>Located in California.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <a href="https://www.linkedin.com/in/an-tran-90495b1b7/"><p><i className="fa fa-linkedin fa-lg"></i> An Tran</p></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <Card className="h-100">
                                <Button className="d-block d-sm-none" onClick={() => this.toggleCard("card1", !this.state.card1)}>
                                    <h4>Bio</h4>
                                </Button>
                                <Collapse isOpen={this.state.card1} className="d-sm-block">
                                    <CardBody className="text-left">
                                        <h1 className="d-none d-sm-block">Bio</h1>
                                        <p>I am a graduated student of UC Santa Cruz and had acquired certifications for Front End Web Development. 
                                            I enjoy my time learning new coding tricks and improving my coding knowledge. Hobbies would include playing game and learning graphic design.
                                        </p>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </div>

                        <div className="col-12 col-sm-4">
                            <Card className="h-100">
                                <Button className="d-block d-sm-none" onClick={() => this.toggleCard("card2", !this.state.card2)}>
                                    <h4>Skills</h4>
                                </Button>
                                <Collapse isOpen={this.state.card2} className="d-sm-block">
                                    <CardBody className="text-left">
                                        <h1 className="d-none d-sm-block">Skills</h1>
                                        <ul>
                                            <li>HTML</li>
                                            <li>Javascript</li>
                                            <li>CSS</li>
                                            <li>React.js</li>
                                            <li>Bootstrap 4</li>
                                            <li>JQuery</li>
                                        </ul>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </div>

                        <div className="col-12 col-sm-4">
                            <Card className="h-100">
                                <Button className="d-block d-sm-none" onClick={() => this.toggleCard("card3", !this.state.card3)}>
                                    <h4>Personality</h4>
                                </Button>
                                <Collapse isOpen={this.state.card3} className="d-sm-block">
                                    <CardBody className="text-left">
                                        <h1 className="d-none d-sm-block text-truncate">Personality</h1>
                                        <ul>
                                            <li>Positive</li>
                                            <li>Multitasker</li>
                                            <li>Never give up</li>
                                            <li>Quick learner</li>
                                        </ul>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;