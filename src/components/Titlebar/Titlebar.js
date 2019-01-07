import React from 'react';
import "./Titlebar.css";
import { Jumbotron, Container } from 'reactstrap';


const Titlebar = () => (
    <div>
        <Container fluid id="titlebar-container">
            <Jumbotron id="titlebar-jumbotron">
                <div className="title font-effect-shadow-multiple">
                    <h1>Egg Hunt</h1>
                </div>
                <img src="./images/bunny.png" />
            </Jumbotron>
        </Container>

    </div>
)

export default Titlebar;