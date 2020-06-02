import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectList from './ProjectList';
import ProjectBar from './ProjectBar'


const Project = () => {
    
    return (
        <Container>
            <ProjectBar/>
            <br/>
            <ProjectList/>
        </Container>
    )
}



export default Project