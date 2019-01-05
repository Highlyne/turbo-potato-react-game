import React, { Component } from 'react';
import Titlebar from './components/Titlebar/Titlebar';
import Scoreboard from './components/Scoreboard/Scoreboard';
import GoalBox from './components/GoalBox/GoalBox';
import PlayArea from './components/PlayArea/PlayArea';

class App extends Component {
    // State of all of the game details.
    state = {
      userScore:1,
      wins:1,
      games:5,
      goal:45,
      // watch the value of box
      box1amount:0,    
      box2amount:0,    
      box3amount:0,    
      box4amount:0    
  }

  startGame = () => {
      // let amount = {...this.state};
      let newBox1amount = Math.floor(Math.random() * 15) + 1;
      let newBox2amount = Math.floor(Math.random() * 15) + 1;
      let newBox3amount = Math.floor(Math.random() * 15) + 1;
      let newBox4amount = Math.floor(Math.random() * 15) + 1;
      alert("setRandomAmount is fireing " + this.state.box3amount);
      this.setState({
          box1amount: newBox1amount,    
          box2amount: newBox2amount,    
          box3amount: newBox3amount,    
          box4amount: newBox4amount,
          userScore: 10,
          wins: 0,
          games: 0,
          goal: Math.floor(Math.random() * 45) + 1 
      });
  }
  
  sumBoxes = (amount) => {
     const userScore = this.state.userScore 
     let addUserScore = parseFloat(amount)
     let newUserScore = userScore + addUserScore
     alert("Your box is worth " + addUserScore) 
     alert("Your user score is  " + userScore) 
     alert("Your user score is  " + newUserScore) 
     this.setState({
       userScore: newUserScore
     })
    }
  render() {
    return (
      <div className="App">
        <Titlebar />
        <Scoreboard wins={this.state.wins} gameScore={this.state.userScore} losses={this.state.games}/>
        <GoalBox userGoal={this.state.goal}/>
        <PlayArea gameState= {this.state} startGame={this.startGame} clickSum={this.sumBoxes}/>
      </div>
    );
  }
}

export default App;
