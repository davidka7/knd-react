import React from 'react';
import './home.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const Home = () => {
    
    return (
        <div className="home">
            <Container className="jumbotron">
                <Row>
                    <Col xs={12} md={9}>
                        <h1 className="display-3">Welcome to Plany Boat!</h1>
                        <p className="lead">This is a simple app, created by two programing sailors: Kim and David.</p>
                    </Col>
                    <Col xs={12} md={3} className ="a" >
                        <img src={require(`../images/giphy.gif`)} alt={"giffy"} height="200px" />
                    </Col>
                </Row>
                <hr className="my-4"></hr>
                <p className="size22">Plany Boat lets you work more collaboratively and get more done.</p>
                <p className="size22">Boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</p>
            </Container>

        </div>
    )
}
export default Home