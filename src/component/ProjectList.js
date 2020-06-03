import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import { getMyProjects, deleteProject } from '../actions/projectAction';
import { Link } from "react-router-dom";
import { getBoards } from '../actions/boardAction';
import CreateProject from './CreateProject'
import {ProjectId_save} from '../actions/projectIdAction';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import './3dots.css'
const ProjectList = ({ProjectId_save, getMyProjects, projects, projectId, deleteProject}) => {

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

    return (
        <Row className="boards jumbotron">
            {projects.map(project => (
                <Col xs={6} md={2} id="lol"> <div ><Link className="cont"
                    to="/boards" 
                    className="btn btn-outline-primary btn-block" 
                    
                    onClick={() => handleId(project.id)} >{project.topic}
                </Link>  
              
                <Dropdown className="s3dots">
  <Dropdown.Toggle  variant="white" id="dropdown-basic">
  <div ></div>
  </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item >
                            <Button onClick={() => handleDelete(project.id)} type="submit">Delete</Button>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>     
                
                  </div> </Col>))}
            <Col xs={6} md={2}><CreateProject/></Col>
        </Row>
    )
}

const mapStateToProps = (store) => {
    return {projects: store.projects}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMyProjects: () => getMyProjects().then(dispatch),
        projectId: (project_id) => getBoards(project_id).then(dispatch),
        deleteProject: (id) => deleteProject(id, dispatch),
        ProjectId_save: (id => ProjectId_save(id, dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)

