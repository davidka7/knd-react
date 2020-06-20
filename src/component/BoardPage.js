import React, {useEffect}  from 'react';
import BoardNavBar from './BoardNavBar';
import BoardList from './BoardList';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import {getBoards} from '../actions/boardAction';
import {ProjectId_save} from '../actions/projectIdAction'
import './board.css'

const BoardPage = ({boards, getBoards, ProjectId_save, projectInfo}) => {

    const { projectId } = useParams();

    useEffect(() =>{
        getBoards(projectId)
    }, []);

    useEffect(() =>{
        ProjectId_save(projectId)
    }, []);

    return (
        <div className="board-page">
            <BoardNavBar projectInfo={projectInfo}/>
            <BoardList boards={boards} projectInfo={projectInfo}/>
        </div>
    )
}



const mapStateToProps = (store) => {
    return {
        boards: store.boards,
        projectInfo: store.projectInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBoards: (projectId) => getBoards(projectId).then(dispatch),
        ProjectId_save: (projectId) => ProjectId_save(projectId, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BoardPage)