import React, {useState} from 'react';
import { connect } from 'react-redux';
import MemberInfo from './MemberInfo'

const MemberEdit = ({project}) => {

    const [show, setShow] = useState(false);
    
    return (
        <>
        <hr/>
            <p>Current members:</p>
            {project.user_projects.map( u => <MemberInfo key={u.id} member={u}/> )}
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(null, mapDispatchToProps)(MemberEdit)