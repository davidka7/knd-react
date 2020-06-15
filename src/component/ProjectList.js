import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import { getMyProjects } from '../actions/projectAction';
import { getBoards } from '../actions/boardAction';
import CreateProject from './CreateProject'
import { ProjectId_save } from '../actions/projectIdAction';
import { getuserprojetcs } from '../actions/userprojectAction';
import { Link } from "react-router-dom";
import './3dots.css'
import './Project.css'
import Other from './Other.js'
import MyProject from './MyProject'


const ProjectList = ({ ProjectId_save, getMyProjects, projects, projectId, getuserprojetcs }) => {

    const handleId = (project_id) => {
        projectId(project_id);
        ProjectId_save(project_id)
    }

    useEffect(() => {
        getMyProjects();
    }, [])
  
    useEffect(() => {
        getuserprojetcs(projects.userContext.user.id);
    }, [])

    return (
        <div>
            <Row className="project-list-box jumbotron">
                <Col xs={12} md={12}><h3 className="text-muted"> Your projects </h3> </Col>
                {projects.projects.map(project => ( 
                    <Col xs={6} md={2} key={project.id} className="btn btn-outline-primary btn-block projectCol"> 
                        <MyProject project={project}/>
                    </Col>))
                }
                <Col xs={6} md={2}><CreateProject /></Col>
            </Row>

            
            <Row className="project-list-box jumbotron">
            <Col xs={12} md={12}><h3 className="text-muted"> Share projects </h3> </Col>
                {projects.user_project.map(project => (
                    <Col xs={6} md={2} key={project.id} className="btn btn-outline-primary btn-block projectCol"> 
                        <span><Link 
                            to={`/projects/${project.id}`}
                            onClick={() => handleId(project.id)} >
                            {project.topic}
                        </Link></span> 
                    </Col>))
                }

                <Other projects={projects.projects} />
                
            </Row>

          
        </div>
    )
}

const mapStateToProps = (store) => {
    return { projects: store }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMyProjects: () => getMyProjects().then(dispatch),
        getuserprojetcs: (id) => getuserprojetcs(id).then(dispatch),
        projectId: (project_id) => getBoards(project_id).then(dispatch),
        ProjectId_save: (id => ProjectId_save(id, dispatch)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)

