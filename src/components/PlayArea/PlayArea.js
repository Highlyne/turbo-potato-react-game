import React from 'react';
import Playbox from './Playboxes/Playbox';
import './PlayArea.css';

class PlayArea extends React.Component {
  


    render() {
        return (
            <div className="playArea">
                <p>Play Area</p>
                <button onClick={this.props.startGame}>Start Game</button>
                <Playbox boxAmount={this.props.gameState.box1amount} clickSum={this.props.clickSum} />
                <Playbox boxAmount={this.props.gameState.box2amount} clickSum={this.props.clickSum} />
                <Playbox boxAmount={this.props.gameState.box3amount} clickSum={this.props.clickSum} />
                <Playbox boxAmount={this.props.gameState.box4amount} clickSum={this.props.clickSum} />
            </div>
        )
    }
}

export default PlayArea;