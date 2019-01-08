import React from 'react';
import './Playbox.css';

class Playbox extends React.Component {
    


    render() {

        return (
            
            <div className="playbox">
            <a href="#" onClick={() => this.props.clickSum(this.props.boxAmount)}>
            <img id="playboxImg" src= {this.props.paddle} alt="Paddle"></img></a>
            </div>
            
        )
    }
}

export default Playbox;