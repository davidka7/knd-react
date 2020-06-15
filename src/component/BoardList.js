import React, {useEffect} from 'react';
import Board from './Board';
import CardDeck from 'react-bootstrap/CardDeck';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import AddBoard from './AddBoard';
import {getBoards} from '../actions/boardAction'
import './board.css'

const BoardList = ({boards, getBoards}) => {
    const { projectId } = useParams();

    useEffect(() =>{
        getBoards(projectId)
    }, []);

    return (
        <div className='boardPage' >
        <CardDeck>
            {boards.map( board => <Board key={board.id} boardInfo={board}/>)}
            <Col xs={6} md={2}><AddBoard projectId={projectId}/></Col>
        </CardDeck>  
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

export default connect(mapStateToProps, mapDispatchToProps)(BoardList)