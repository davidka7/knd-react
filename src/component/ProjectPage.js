import React from 'react';
import Container from 'react-bootstrap/Container';
import ProjectList from './ProjectList';
import ProjectBar from './ProjectBar'


const ProjectPage = () => {
    
    return (
        <Container>
            <ProjectBar/>
            <br/>
            <ProjectList/>
        </Container>
    )
}



export default ProjectPage