import React from 'react';


const MemberAdd = ({project}) => {

    const [show, setShow] = useState(false);

    return (
        <Form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formPerson1">
                <Form.Label column sm={2}>Add member</Form.Label>
            </Form.Group>
        </Form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(null, mapDispatchToProps)(MemberAdd)