import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import { getBoards } from '../actions/boardAction';
import { ProjectId_save } from '../actions/projectIdAction';
import DeleteProject from './DeleteProject';
import EditProject from './EditProject';
import Card from 'react-bootstrap/Card'
import './Project.css'

const ShareProject = ({project, projectId, ProjectId_save}) => {

    const handleId = (project_id) => {
        projectId(project_id);
        ProjectId_save(project_id)
    }

    let is_admin = false

    return (
        <Card>
            <Dropdown>
                <Dropdown.Toggle className="custom-select" id="dropdown-basic" block>
                    <h3>{project.topic}</h3>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Header>Options</Dropdown.Header>
                    <hr></hr>
                    {(is_admin) ? 
                    (<> <Dropdown.Item><EditProject project={project}/></Dropdown.Item>
                    <Dropdown.Item><DeleteProject project={project}/></Dropdown.Item> </>)
                    :
                    <Dropdown.Item>*For admins only</Dropdown.Item>
                    }
                </Dropdown.Menu>
            </Dropdown>
                
            
            <Link 
                className="project-box"
                to={`/projects/${project.id}`}
                onClick={() => handleId(project.id)} >
            </Link>
        </Card>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        projectId: (project_id) => getBoards(project_id).then(dispatch),
        ProjectId_save: (id => ProjectId_save(id, dispatch)),
    }
}


export default connect(null, mapDispatchToProps)(ShareProject)