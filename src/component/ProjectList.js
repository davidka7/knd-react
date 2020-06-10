import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import { getMyProjects, deleteProject } from '../actions/projectAction';
import { Link } from "react-router-dom";
import { getBoards } from '../actions/boardAction';
import CreateProject from './CreateProject'
import { ProjectId_save } from '../actions/projectIdAction';
import {getuserprojetcs} from '../actions/userprojectAction'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import './3dots.css'
import Other from './Other.js'


const ProjectList = ({ ProjectId_save, getMyProjects, projects, projectId, deleteProject, getuserprojetcs }) => {

    const handleId = (project_id) => {
        projectId(project_id);
        ProjectId_save(project_id)
    }

    const handleDelete = (id) => {
        deleteProject(id);
    }

    useEffect(() => {
        getMyProjects();
    }, [])
  
    useEffect(() => {
        getuserprojetcs(projects.userContext.user.id);
    }, [])
    return (
        <div>
            <Row className="boards jumbotron">
                {projects.projects.map(project => (
                    <Col xs={6} md={2} id="lol" key={project.id} className="btn btn-outline-primary btn-block"> 
                        <span>
                        <Link 
                            to="/boards"
                            onClick={() => handleId(project.id)} >{project.topic}
                        </Link>

                        <Dropdown >
                            <Dropdown.Toggle variant="white" id="dropdown-basic">
                                <div ></div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item className="btn-block">
                                    <Button onClick={() => handleDelete(project.id)}  type="submit">
                                        Delete Project
                                    </Button>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </span> 
                    </Col>))
                }
                  <Col xs={6} md={2}><CreateProject /></Col>
                </Row>

                <Row className="boards jumbotron">
              
                {projects.user_project.map(project => (
                    <Col xs={6} md={2} id="lol" key={project.id} className="btn btn-outline-primary btn-block"> 
                        <span>
                        <Link 
                            to="/boards"
                            onClick={() => handleId(project.id)} >{project.topic}
                        </Link>
                        </span> 
                    </Col>))
                }
              < Other projects={projects.projects} />




                
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
        deleteProject: (id) => deleteProject(id, dispatch),
        ProjectId_save: (id => ProjectId_save(id, dispatch)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)

