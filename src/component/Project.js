import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ProjectList from './ProjectList';

const Project = () => {
    
    return (
        <Container>
            <Col>Your projects</Col>
            <Col><ProjectList/></Col>
        </Container>
    )
}
export default Project