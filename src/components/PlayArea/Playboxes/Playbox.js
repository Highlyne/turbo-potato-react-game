import React from 'react';
import './Playbox.css';

class Playbox extends React.Component {
    


    render() {

        return (
            <div className="playbox">
                <p>Play buttons</p>
                <p>{this.props.boxAmount}</p>
                <button onClick={() => this.props.clickSum(this.props.boxAmount)}>+</button>
            </div>
        )
    }
}

export default Playbox;