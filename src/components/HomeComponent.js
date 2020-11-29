import React, {Component} from 'react';
import {Collapse, Card, CardBody, Button} from 'reactstrap';
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
                    <div className="container-fluid home_layout">
                        <div className="row">
                            <div className="col-12 col-sm-6 order-12 order-sm-1">
                                <div className="row justify-content-center ml-sm-5 ml-xl-0 mt-5 mt-sm-0 ">
                                    <div className="col-12 col-sm-8 mt-sm-3">
                                        <Card className="card_layout">
                                                <Button color="secondary" style={{borderRadius:"10px"}} block className="d-block d-sm-none" onClick={() => this.toggleCard("card1", !this.state.card1)}>
                                                    <h4>About Me</h4>
                                                </Button>
                                                <Collapse isOpen={this.state.card1} className="d-sm-block">
                                                    <CardBody className="text-left">
                                                        <h1 className="d-none d-sm-block">About Me</h1>
                                                        <p>I am a graduated student of UC Santa Cruz and had acquired certifications for Front End Web Development. 
                                                            I enjoy my time learning new coding tricks and improving my coding knowledge. Hobbies would include playing game and learning graphic design.
                                                        </p>
                                                    </CardBody>
                                                </Collapse>
                                        </Card>
                                    </div>
                                    <div className="col-12 col-sm-8 mt-sm-3">
                                        <Card className="card_layout">
                                            <Button color="secondary" style={{borderRadius:"10px"}} block className="d-block d-sm-none" onClick={() => this.toggleCard("card2", !this.state.card2)}>
                                                <h4>Skills</h4>
                                            </Button>
                                            <Collapse isOpen={this.state.card2} className="d-sm-block">
                                                <CardBody className="text-left">
                                                    <h1 className="d-none d-sm-block">Skills</h1>
                                                    <h6>(Languages, Libraries, Famework)</h6>
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
                                    <div className="col-12 col-sm-8 mt-sm-3">
                                        <Card className="card_layout">
                                            <Button color="secondary" style={{borderRadius:"10px"}} block className="d-block d-sm-none" onClick={() => this.toggleCard("card3", !this.state.card3)}>
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
                                                        <li>Enjoy coding</li>
                                                        <li>Welcome feedbacks</li>
                                                    </ul>
                                                </CardBody>
                                            </Collapse>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 order-1 order-sm-12 align-self-sm-center">
                                <div className="row justify-content-sm-center mt-5 mt-sm-0">
                                    <div className="col-12 col-sm-6 ml-sm-5">
                                        <h1 style={{fontSize:"80px", fontWeight:"bold"}}>Hello</h1>
                                    </div>
                                </div>
                                <div className="row justify-content-sm-center">
                                    <div className="col-12 col-sm-6 ml-sm-5">
                                        <h3 style={{fontSize:"40px"}}>I'm An Tran.</h3>
                                    </div>
                                </div>
                                <div className="row justify-content-sm-center">
                                    <div className="col-12 col-sm-6 ml-sm-5">
                                        <h3 style={{fontSize:"40px"}}>Front End Web Designer</h3>
                                    </div>
                                </div>
                                <div className="row mt-sm-5 mt-3 justify-content-sm-center">
                                    <div className="col-12 col-sm-6 ml-sm-5">
                                        <p>Located in California.</p>
                                    </div>
                                </div>
                                <div className="row justify-content-sm-center">
                                    <div className="col-12 col-sm-3 col-lg-2 col-xl-2 ml-sm-5">
                                        <a href="https://www.linkedin.com/in/an-tran-90495b1b7/"><p><i className="fa fa-linkedin fa-lg"></i> An Tran</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;