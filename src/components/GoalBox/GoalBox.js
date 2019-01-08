import React from 'react';
import './Goal.css';

class GoalBox extends React.Component {
    render(props) {
        return (
            <div className="goalArea">
                <h1>Goal to meet:<span>{this.props.userGoal}</span></h1>
                <h1>Current Score:<span>{this.props.gameScore}</span></h1>
            </div>
        )
    }

} 

export default GoalBox;