import React, {useState} from 'react';
import { connect } from 'react-redux';
import "./MemberAdd.css";
const MemberInfo = ({member}) => {

    return (
        <div>
           <div id ="same-line"> {member.user.username}
           </div> 	&nbsp;
            <p id ="same-line1" className="text-muted">
                {member.admin_permission ? "Co-Admin" : "viewer"}
            </p>
            
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(null, mapDispatchToProps)(MemberInfo)