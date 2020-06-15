import React from 'react';
import './home.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Login from '../component/Login';
import SignUp from '../component/SignUp';



const Home = () => {
    
    return (
        <div className="home">
            <Container className="jumbotron">
                <Row>
                    <Col xs={12} md={9}>
                        <h1 className="display-3">Welcome to Plany Boat!</h1>
                        <p className="lead">Plany Boat lets you work more collaboratively and get more done.</p>
                        <p className="lead">Boards, lists, and cards enable you to organize and prioritize your projects in a fun and flexible way.</p>
                        {/* <Login/>
                        <SignUp/>  */}
                    </Col>
                    <Col xs={12} md={3} className ="a" >
                        <img src={require(`../images/giphy.gif`)} alt={"giffy"} height="200px" />
                    </Col>
                </Row>
                <hr className="my-4"></hr>
                <p className="size22">This is a complex app, created by two programing sailors: Kim and David.</p>
                <p className="size22"></p>
            </Container>

        </div>
    )
}
export default Home