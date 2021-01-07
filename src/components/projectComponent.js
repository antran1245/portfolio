import React from 'react';
import { Modal, Card, Image, Container, Row, Col, Button } from 'react-bootstrap';
import { projects } from '../database/database';

function Projects (props) {
    return(
        <Modal show={props.show} onHide={props.onHide} size="lg">
            <Modal.Header closeButton>
                <h1>Projects</h1>
            </Modal.Header>
            <Modal.Body>
                <Container fluid>
                    {projects.map((project) => (
                        <Row>
                            <Card border="dark" className="mt-2" >
                                <Row>
                                    <Col xs={12} sm={3} className="align-self-center">
                                        <Image src={require('../image/'+ project.img)} alt={project.img} width="100%"/>
                                    </Col>
                                    <Col xs={12} sm={9}>
                                        <Row>
                                            <Col>
                                                <Card.Header>{project.title}</Card.Header>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Card.Body>
                                                    <Row>
                                                        {project.body}
                                                    </Row>
                                                    <Row className="mt-2 mt-sm-4 justify-content-end">
                                                        <Button style={{width:"50%"}} href={project.link} size="sm">Link</Button>
                                                    </Row>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>
                    ))}
                </Container>
            </Modal.Body>
        </Modal>
    );
}

export default Projects;