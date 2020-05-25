import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import BoardList from './BoardList'
import {
    BrowserRouter as Router,
    Route, Link
  } from "react-router-dom";
const ProjectList = () => {

    const p = [ {id: 1, topic: 'Have fun', background_image: 'nil'},
                {id: 2, topic: 'Study', background_image: 'nil'},
                {id: 3, topic: 'Project', background_image: 'nil'},
                {id: 4, topic: 'Job Search', background_image: 'nil'}
            ]
    
    return (
        <Row>
            {p.map(project => (<Col>
 <Router>
 <Link className="btn btn-outline-primary" to='/boards'> {project.topic} </Link>
<Route path='/boards'>
<BoardList />
</Route>
</Router>
 </Col>))}
        </Row>
    )
}
export default ProjectList