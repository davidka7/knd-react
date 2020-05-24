import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const ProjectList = () => {

    const p = [ {topic: 'Have fun', background_image: 'nil'},
                {topic: 'Study', background_image: 'nil'},
                {topic: 'Project', background_image: 'nil'},
                {topic: 'Job Search', background_image: 'nil'}
            ]
    
    return (
        <Row>
            {p.map(project => (<Col> <button> {project.topic} </button> </Col>))}
        </Row>
    )
}
export default ProjectList