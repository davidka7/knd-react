import React from 'react';
import Container from 'react-bootstrap/Container';
import ProjectList from './ProjectList';
import ProjectBar from './ProjectBar'
import './Project.css'

const ProjectPage = () => {
    
    return (
        <div className="projectPage">
            <Container>
                <ProjectBar/>
                <br/>
                <ProjectList/>
            </Container>
        </div>
    )
}



export default ProjectPage