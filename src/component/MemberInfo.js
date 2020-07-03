import React, {useState} from 'react';
import { connect } from 'react-redux';

const MemberInfo = ({member}) => {

    return (
        <>
            {member.user.username} <p className="text-muted">{member.admin_permission ? "Co-Admin" : "viewer"}</p>
            
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(null, mapDispatchToProps)(MemberInfo)