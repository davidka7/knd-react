import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { getuser } from '../actions/userprojectAction';
import { user_project } from '../actions/userprojectAction';
import { clearUserSearch } from '../actions/userprojectAction';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
const Other = ({ projects, user_project, getuser, user, currentUser, clearUserSearch }) => {

    // useEffect(() => {
    //     console.log(person1)
    //     getuser(person1);
    // }, [])
    console.log(projects.id)
    const tru = useState("true")
    const fals = useState("false")
    const project1 = useState(projects.id)
    const [perso, setPerso] = useState("")
    const [show, setShow] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false)
    const handleClose = () => {setShow(false); clearUserSearch();}
    const handleShow = () => {setShow(true); setPerso('')}
    // const [project1, setProjec] = useState('');

    const handleSubmit = e => {
        // console.log("GET HERE")
        e.preventDefault();
        e.stopPropagation();
        console.log("GET HERE")
        if ( currentUser.username !== perso ){ getuser(perso) }
        // setProjec('');
    }

    const handleSubmit1 = e => {
        e.preventDefault();
        e.stopPropagation();
        // setId(user.id)
        // console.log(user_id);
        setShow(false); 
        clearUserSearch();
        user_project(user.id, projects.id, isAdmin);
        // setId('')
        // setProjec('');
    }
    // const handleId = () => {
    //     user_project()
    // }

    // const [projecto, setProjecto] = useState('')
    // const handlePerson = e => { setPerson(e.target.value) };
    // const handleProject = e => {  setProject(projects.filter(project => project.topic == e.target.value))  };

    const handleAdmin = e => setIsAdmin(e.target.value);
    const handlePerso = e => { setPerso(e.target.value) };
    const [value, setValue] = useState('');

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href=""
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
          &#x25bc;
        </a>
      ));

      const CustomToggle1 = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href=""
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
          &#x25bc;
        </a>
      ));
      
      // forwardRef again here!
      // Dropdown needs access to the DOM of the Menu to measure it
      const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
          
      
          return (
            <div
              ref={ref}
              style={style}
              className={className}
              aria-labelledby={labeledBy}
            >
              <Form.Control
                autoFocus
                className="mx-3 my-2 w-auto"
                placeholder="Type to filter..."
             
                onChange={handlePerso}
                value={perso}
              />  
              <Button onClick={handleSubmit} type="submit" > Search</Button>
              <ul className="list-unstyled">
                {React.Children.toArray(children).filter(
                  (child) =>
                    !perso || child.props.children.toLowerCase().startsWith(perso),
                )}
              </ul>
              
            </div>
          );
        },
      );


    return (
        <>
         <p onClick={handleShow}>Edit Members </p>
            {/* <Button variant="outline-primary" onClick={handleShow} block> Add Member </Button> */}
        
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Admin To Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                    <Form onSubmit={handleSubmit}>

                        <>
                     
                     
<Dropdown>
    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
     Search For New Members
    </Dropdown.Toggle>

    <Dropdown.Menu as={CustomMenu}>
      <Dropdown.Item eventKey="1">Kim Admin Permission: Viewer</Dropdown.Item>
   {/* <div>   <button>Change Permission</button> <button>Delete</button> </div> */}
      <Dropdown.Item eventKey="2">Max Admin Permission: Viewer</Dropdown.Item>
      {/* <button>Change Permission</button> <button>Delete</button> */}
      <Dropdown.Item eventKey="3">
        Tim - Admin Permission: Co-Admin
      </Dropdown.Item>
      {/* <button>Change Permission</button> <button>Delete</button> */}
      <Dropdown.Item eventKey="4">David - Admin Permission: Admin</Dropdown.Item>
      {/* <button>Change Permission</button> <button>Delete</button> */}
    </Dropdown.Menu>
  </Dropdown>
  <Dropdown>
  <Dropdown.Toggle id="dropdown-custom-components" as={CustomToggle1}>
  Edit Members
  </Dropdown.Toggle>
  <Dropdown.Menu >
  <Dropdown.Item href="#/action-1"> Kim Viewer <div>   <button>Change Permission</button> <button>Delete</button> </div></Dropdown.Item>
  <Dropdown.Item href="#/action-2">Max Viewer <div>   <button>Change Permission</button> <button>Delete</button> </div></Dropdown.Item>
  <Dropdown.Item href="#/action-3">Tim  Co-Admin<div>   <button>Change Permission</button> <button>Delete</button> </div></Dropdown.Item>
  <Dropdown.Item href="#/action-4">David  Admin<div>   <button>Change Permission</button> <button>Delete</button> </div></Dropdown.Item>
  </Dropdown.Menu >

</Dropdown>
                        {/* <Form.Group controlId="formPerson1">
                            <Form.Label>Look up username</Form.Label>
                            <Form.Control
                                type="perso"
                                placeholder="Type username..."
                                onChange={handlePerso}
                                value={perso}
                                className={ `${user ? 'is-valid' : ''}`}
                            />
                        </Form.Group> */}
                       
                        {user ? <p className="text-success">Found username {user.username}</p> : null}
</>
                       
                    </Form>
                    <Form onSubmit={handleSubmit1}>
                        {user ?
                            <>
                            
                                <>
                                    <Form.Label>Admin can edit and delete this project.</Form.Label>
                        
                                   
      <button onChange={handleAdmin}
                                        value={tru}>Is Admin</button>
      <button onChange={handleAdmin}
                                        value={fals}>Can only View</button>
     
   
                                    </>
                            </>
                            : 
                            "If you don't know your friend's username, ask them."
                        }
                        { user ?
                        
                            <>
                            <br></br><Button variant="secondary" onClick={handleClose}> Cancel </Button>
                            <Button type="submit" variant="primary" onClick={handleSubmit1}>Share </Button></>
                            : 
                            null
                        }
                    </Form>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}
const mapStateToProps = (store) => {
    return { 
        user: store.user_share,
        currentUser: store.userContext.user
     }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getuser: (perso) => getuser(perso).then(dispatch),
        user_project: (user_id, project_id, isAdmin) => user_project(user_id, project_id, isAdmin).then(dispatch),
        clearUserSearch: () => dispatch(clearUserSearch())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Other)