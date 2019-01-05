import React from 'react';
import './Playbox.css';

class Playbox extends React.Component {
    
    // amount = this.props.boxAmount;
    // handleBoxClick = (amount) => {
    //     this.props.clickSum(amount);
    // }

    render() {
        // const PlayAmount = parseFloat(this.props.PlayAmount);
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