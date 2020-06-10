import React from 'react';
import './home.css'
const Home = () => {
    
    return (
        <div className="home">

            <img 
                src={require(`../images/giphy.gif`)} 
                alt={"giffy"} 
                height="200px" width="200px" 
                text-align="center"
            />

            <div class="jumbotron">
                <h1 class="display-3">Welcome to Plany Boat!</h1>
                <p class="lead">This is a simple app, created by two programing sailors.</p>
                <hr class="my-4"></hr>
                <p>You can create a project, boards and notes to keep track of your work.</p>
            </div>

        </div>
    )
}
export default Home