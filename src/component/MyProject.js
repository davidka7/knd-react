import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import { deleteProject } from '../actions/projectAction';
import { getBoards } from '../actions/boardAction';
import { ProjectId_save } from '../actions/projectIdAction';

const MyProject = ({project, deleteProject, projectId, ProjectId_save}) => {

    const handleId = (project_id) => {
        projectId(project_id);
        ProjectId_save(project_id)
    }

    const handleDelete = (id) => {
        deleteProject(id);
    }

    return (
        <span>
            <Link 
                to={`/projects/${project.id}`}
                onClick={() => handleId(project.id)} >{project.topic}
            </Link>

            <Dropdown >
                <Dropdown.Toggle variant="white" id="dropdown-basic">
                    <div></div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item className="btn-block">
                        <Button onClick={() => handleDelete(project.id)} type="submit">
                            Delete Project
                        </Button>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </span> 
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        projectId: (project_id) => getBoards(project_id).then(dispatch),
        deleteProject: (id) => deleteProject(id, dispatch),
        ProjectId_save: (id => ProjectId_save(id, dispatch)),
    }
}


export default connect(null, mapDispatchToProps)(MyProject)