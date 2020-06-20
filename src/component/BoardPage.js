import React, {useEffect}  from 'react';
import BoardNavBar from './BoardNavBar';
import BoardList from './BoardList';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import {getBoards} from '../actions/boardAction'
import './board.css'

const BoardPage = ({boards, getBoards}) => {

    const { projectId } = useParams();

    useEffect(() =>{
        getBoards(projectId)
    }, []);

    return (
        <div className="board-page">
            <BoardNavBar projectId={projectId}/>
            <BoardList boards={boards} projectId={projectId}/>
        </div>
    )
}



const mapStateToProps = (store) => {
    return {boards: store.boards}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBoards: (projectId) => getBoards(projectId).then(dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BoardPage)