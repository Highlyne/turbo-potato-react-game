import React from 'react';
import Playbox from '../Playboxes/Playbox';
import { Jumbotron, Container } from 'reactstrap';
import './PlayArea.css';

class PlayArea extends React.Component {
  


    render() {
        return (
            <Container fluid id="scoreboard-container">
            <Jumbotron id="scoreboard-jumbotron" >
            <div className="playArea">
        
                <Playbox boxAmount={this.props.gameState.box1amount} clickSum={this.props.clickSum} paddle="./images/purpleEgg.png" />
                <Playbox boxAmount={this.props.gameState.box2amount} clickSum={this.props.clickSum} paddle="./images/yelloEgg.png"/>
                <Playbox boxAmount={this.props.gameState.box3amount} clickSum={this.props.clickSum} paddle="./images/pinkEgg.png"/>
                <Playbox boxAmount={this.props.gameState.box4amount} clickSum={this.props.clickSum} paddle="./images/mintEgg.png"/>
            </div>
            </Jumbotron>
            </Container>

        )
    }
}

export default PlayArea;