import React from 'react';
import ProjectList from './ProjectList';
import ProjectBar from './ProjectBar';
import './Project.css';

const ProjectPage = () => {
    
    return (
        <div className="projectPage">
            <ProjectBar/>
            <br/>
            <ProjectList/>
        </div>
    )
}



export default ProjectPage