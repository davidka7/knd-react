import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import BoardList from './BoardList'

import {Link} from "react-router-dom";
const ProjectList = () => {

    const p = [ {id: 1, topic: 'Have fun', background_image: 'nil'},
                {id: 2, topic: 'Study', background_image: 'nil'},
                {id: 3, topic: 'Project', background_image: 'nil'},
                {id: 4, topic: 'Job Search', background_image: 'nil'}
            ]
    
    return (
        <Row>
            {p.map(project => (<Col>
          
            <Link to="/boards" className="btn btn-outline-primary">{project.topic}</Link>
               
 </Col>))}
        </Row>
    )
}
export default ProjectList