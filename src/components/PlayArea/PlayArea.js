import React from 'react';
import Playbox from './Playboxes/Playbox';
import './PlayArea.css';

class PlayArea extends React.Component {
  


    render() {
        return (
            <div className="playArea">
        
                <Playbox boxAmount={this.props.gameState.box1amount} clickSum={this.props.clickSum} paddle="./images/pad1.png" />
                <Playbox boxAmount={this.props.gameState.box2amount} clickSum={this.props.clickSum} paddle="./images/pad2.png"/>
                <Playbox boxAmount={this.props.gameState.box3amount} clickSum={this.props.clickSum} paddle="./images/pad3.png"/>
                <Playbox boxAmount={this.props.gameState.box4amount} clickSum={this.props.clickSum} paddle="./images/pad4.png"/>
            </div>
        )
    }
}

export default PlayArea;