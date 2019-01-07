import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import '../Scoreboard/Scoreboard.css';

class Scoreboard extends React.Component {
    render() {
        return (
            <Container fluid id="scoreboard-container">
            <Jumbotron id="scoreboard-jumbotron" >
            <Container>
            <Row>
            <Col id="col" xs="auto">
            <img src="./images/jetski.jpg" />
            </Col>
            <Col id="col" xs="3">
            <h1>Games:<span>{this.props.losses}</span></h1>
            <h1>Score:<span>{this.props.gameScore}</span></h1>
            <h1>Wins:<span>{this.props.wins}</span></h1>
            </Col>
            </Row>
            </Container>
            </Jumbotron>
            </Container>
        )
    }

} 

export default Scoreboard;
