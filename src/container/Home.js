import React from 'react';
import './home.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SignIn from '../component/SignIn';
import SignUp from '../component/SignUp';
import { connect } from 'react-redux';


const Home = ({userInfo}) => {
    
    return (
        <div className="home">
            <Container className="jumbotron">
                <Row>
                    <Col xs={12} md={9}>
                        <h1 className="display-3">Welcome to Plany Boat!</h1>
                        <br/>
                        { userInfo ? 
                        <p className="text-info">Hi, {userInfo.username} !</p>
                        :
                        <Row> 
                            <Col xs={12} md={5}>
                                <p className="lead">Have an account?</p>
                                <SignIn/>
                            </Col>
                            <Col xs={12} md={2}>
                                <p className="lead">Or</p>
                            </Col>
                            <Col xs={12} md={5}>
                                <p className="lead">Don't have an account?</p>
                                <SignUp/> 
                            </Col>
                        </Row>
                        }
                        <br/>
                        <p className="lead">Plany Boat lets you work more collaboratively and get more done. <br/>
                        Boards, lists, and cards enable you to organize and prioritize your projects in a fun and flexible way.</p>
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

const mapStateToProp = (store) => {
    return { userInfo : store.userContext.user }
}

export default connect(mapStateToProp)(Home)