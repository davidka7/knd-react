import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import { getBoards } from '../actions/boardAction';
import { ProjectId_save } from '../actions/projectIdAction';
import DeleteProject from './DeleteProject';
import EditProject from './EditProject'
import './Project.css'

const MyProject = ({project, projectId, ProjectId_save}) => {

    const handleId = (project_id) => {
        projectId(project_id);
        ProjectId_save(project_id)
    }

    return (
        <span>
            <Link className="display-3"
                to={`/projects/${project.id}`}
                onClick={() => handleId(project.id)} > <h3>{project.topic}</h3>
            </Link>

            <Dropdown >
                <Dropdown.Toggle variant="white" id="dropdown-basic">
<<<<<<< HEAD
                    OSome
=======
                    Options
>>>>>>> nk2303/6-14-7PM-project-css-in-progress
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item className="btn-block"><DeleteProject project={project}/></Dropdown.Item>
                    <Dropdown.Item className="btn-block"><EditProject project={project}/></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </span> 
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        projectId: (project_id) => getBoards(project_id).then(dispatch),
        ProjectId_save: (id => ProjectId_save(id, dispatch)),
    }
}


export default connect(null, mapDispatchToProps)(MyProject)