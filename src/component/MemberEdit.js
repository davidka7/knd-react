import React, {useState} from 'react';
import { connect } from 'react-redux';
import MemberInfo from './MemberInfo'

const MemberEdit = ({project}) => {

    const [show, setShow] = useState(false);
    console.log(project)

    return (
        <>
            <p>Current members:</p>
           { console.log(project)}
            {project.user_projects.map( u => <MemberInfo key={u.id} member={u}/> )}
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(null, mapDispatchToProps)(MemberEdit)