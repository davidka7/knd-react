import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import { getMyProjects } from '../actions/projectAction';
import { Link } from "react-router-dom";
import { getBoards } from '../actions/boardAction';
import CreateProject from './CreateProject'

const ProjectList = ({getMyProjects, projects, projectId}) => {

    const handleId = (project_id) => {
        projectId(project_id);
    }

    useEffect(() => {
        getMyProjects();
    }, [])

    return (
        <Row className="boards jumbotron">
         {   console.log(projects)}
            {projects.map(project => (
                <Col xs={6} md={2}><Link 
                    to="/boards" 
                    className="btn btn-outline-primary btn-block" 
                    onClick={() => handleId(project.id)} >{project.topic}
                </Link></Col>))}
            <Col xs={6} md={2}><CreateProject/></Col>
        </Row>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMyProjects: () => getMyProjects().then(dispatch),
        projectId: (project_id) => getBoards(project_id).then(dispatch)
    }
}

export default connect(store=>({projects: store.projects}), mapDispatchToProps)(ProjectList)

