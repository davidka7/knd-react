import React from 'react';
import Container from 'react-bootstrap/Container';
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