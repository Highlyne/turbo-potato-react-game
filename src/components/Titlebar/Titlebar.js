import React from 'react';
import "./Titlebar.css";
import { Jumbotron, Container } from 'reactstrap';


const Titlebar = () => (
    <div>
        <Container fluid id="titlebar-container">
            <Jumbotron id="titlebar-jumbotron">
                <div className="titlebar font-effect-shadow-multiple">
                    <h1>Egg Hunt</h1>
                </div>
            </Jumbotron>
        </Container>

    </div>
)

export default Titlebar;