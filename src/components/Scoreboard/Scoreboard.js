import React from 'react';
import '../Scoreboard/Scoreboard.css';

class Scoreboard extends React.Component {
    render() {
        return (
            <div>
                <h1>Bunny's Egg:<span>{this.props.losses}</span></h1>
                <h1>Score:<span>{this.props.gameScore}</span></h1>
                <h1>Your Eggs:<span>{this.props.wins}</span></h1>
            </div>
        )
    }

} 

export default Scoreboard;
