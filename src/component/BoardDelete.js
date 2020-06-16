import React, {useState} from 'react';
import { deleteBoard } from '../actions/boardAction';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal'


const BoardDelete = ({boardInfo, deleteBoard}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        deleteBoard(boardInfo.id);
    }

    return (
        <>
            <p onClick={handleShow}>Delete board</p>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Delete {boardInfo.title} project</Modal.Title>
                </Modal.Header>
                    <Modal.Body className="text-danger">
                        Deleting means you will lose all cards in this board: {boardInfo.title}!
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
                    <Button type="submit" variant="danger" onClick={handleDelete}> Delete </Button>
                </Modal.Footer>
            </Modal>   
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBoard: (board_id) => deleteBoard(board_id, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(BoardDelete)