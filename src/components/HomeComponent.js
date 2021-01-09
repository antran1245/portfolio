import React, {Component} from 'react';
import {Collapse} from 'reactstrap';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import Projects from './projectComponent';
import '../App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card1: false,
            card2: false,
            card3: false,
            modal: false
        };

        this.toggleCard = this.toggleCard.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    toggleCard(card, state) {
        this.setState({
            [card]: state
        });
    }
    
    showModal () {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        return (
            <div>
                <div className="home">
                    <div className="content">
                    <Container className="home_layout" fluid>
                        <Row>
                            <Col xs={{span:12, order:12}} sm={{span:6, order:12}}>
                                <Row className="row justify-content-center ml-sm-5 ml-xl-0 mt-5 mt-sm-0 ">
                                    <Col xs={12} sm={8} className="mt-sm-2">
                                        <Card className="card_layout">
                                                <Button variant="dark" style={{borderRadius:"10px"}} block className="d-block d-sm-none" onClick={() => this.toggleCard("card1", !this.state.card1)}>
                                                    <h4>About Me</h4>
                                                </Button>
                                                <Collapse isOpen={this.state.card1} className="d-sm-block">
                                                    <Card.Body className="text-left">
                                                        <h1 className="d-none d-sm-block">About Me</h1>
                                                        <p>I am a recent graduate student of UC Santa Cruz with a bachelor's in Computer Science and had acquired certifications for Front End Web Development. 
                                                            My focus lies in creating responsive websites that are user friendly. My future goals include gaining working experience in programming projects, advancing my skills in graphic design, and excelling in collaborating on large scale projects.
                                                        </p>
                                                    </Card.Body>
                                                </Collapse>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={8} className="mt-sm-3">
                                        <Card className="card_layout">
                                            <Button variant="dark" style={{borderRadius:"10px"}} block className="d-block d-sm-none" onClick={() => this.toggleCard("card2", !this.state.card2)}>
                                                <h4>Skills</h4>
                                            </Button>
                                            <Collapse isOpen={this.state.card2} className="d-sm-block">
                                                <Card.Body className="text-left">
                                                    <h1 className="d-none d-sm-block">Skills</h1>
                                                    <h6>(Languages, Libraries, Framework)</h6>
                                                    <ul>
                                                        <li>HTML</li>
                                                        <li>Javascript</li>
                                                        <li>CSS</li>
                                                        <li>React.js</li>
                                                        <li>Bootstrap 4</li>
                                                        <li>JQuery</li>
                                                    </ul>
                                                </Card.Body>
                                            </Collapse>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={8} className="mt-sm-3">
                                        <Card className="card_layout">
                                            <Button variant="dark" style={{borderRadius:"10px"}} block className="d-block d-sm-none" onClick={() => this.toggleCard("card3", !this.state.card3)}>
                                                    <h4>Personality</h4>
                                            </Button>
                                            <Collapse isOpen={this.state.card3} className="d-sm-block">
                                                <Card.Body className="text-left">
                                                    <h1 className="d-none d-sm-block text-truncate">Personality</h1>
                                                    <ul>
                                                        <li>Positive</li>
                                                        <li>Multitasker</li>
                                                        <li>Committed</li>
                                                        <li>Quick learner</li>
                                                        <li>Enjoy coding</li>
                                                        <li>Welcome to feedback</li>
                                                    </ul>
                                                </Card.Body>
                                            </Collapse>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={{span:12, order: 1}} sm={{span:6, order:1}} className="align-self-sm-center">
                                <Row className="justify-content-sm-center mt-5 mt-sm-0">
                                    <Col xs={12} sm={6} className="ml-sm-5">
                                        <h1 style={{fontSize:"80px", fontWeight:"bold"}}>Hello</h1>
                                    </Col>
                                </Row>
                                <Row className="justify-content-sm-center">
                                    <Col xs={12} sm={6} className="ml-sm-5">
                                        <h3 style={{fontSize:"40px"}}>I'm An Tran.</h3>
                                    </Col>
                                </Row>
                                <Row className="row justify-content-sm-center">
                                    <Col xs={12} sm={6} className="ml-sm-5">
                                        <h3 style={{fontSize:"40px"}}>Front End Web Designer</h3>
                                    </Col>
                                </Row>
                                <Row className="mt-sm-5 mt-3 justify-content-sm-center">
                                    <Col xs={12} sm={4} className="ml-sm-5">
                                        <p>Located in California.</p>
                                    </Col>
                                </Row>
                                <Row className="justify-content-sm-center">
                                    <Col xs={12} sm={3} xl={3} className="ml-sm-5">
                                        <Button onClick={this.showModal}>Sample Projects</Button>
                                    </Col>
                                </Row>
                                <Row className="justify-content-sm-center">
                                    <Col xs={12} sm={3} xl={2} className="ml-sm-5 mt-3">
                                        <a href="https://www.linkedin.com/in/an-tran-90495b1b7/">
                                            <i className="fa fa-linkedin"></i> An Tran</a>
                                    </Col>
                                </Row>
                                <Row className="justify-content-sm-center">
                                    <Col xs={12} sm={3} xl={2} className="ml-sm-5 mt-2">
                                        <a href={require("../Resume-An-Tran.pdf")} download><FontAwesomeIcon icon={faFilePdf} size="lg"/> Resume</a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Projects show={this.state.modal} onHide={this.showModal} />
                    </Container>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;