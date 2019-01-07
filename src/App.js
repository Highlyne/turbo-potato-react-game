import React, { Component } from 'react';
import "./css/App.css";
import Titlebar from './components/Titlebar/Titlebar';
import Navbar from './components/Navbar/Navbar';
import Scoreboard from './components/Scoreboard/Scoreboard';
import GoalBox from './components/GoalBox/GoalBox';
import PlayArea from './components/PlayArea/PlayArea';
import {randValues} from './helper';
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

  resetGame = () => {
    
    this.setState({
        box1amount: randValues(),    
        box2amount: randValues(),    
        box3amount: randValues(),    
        box4amount: randValues(),
        userScore: 0,
        goal: Math.floor(Math.random() * 45) + 1 
    });
}


  startGame = () => {
     
      this.setState({
          box1amount: randValues(),    
          box2amount: randValues(),    
          box3amount: randValues(),    
          box4amount: randValues(),
          userScore: 0,
          wins: 0,
          games: 0,
          goal: Math.floor(Math.random() * 45) + 1 
      });
  }
  
  sumBoxes = (amount) => {

     const wins = this.state.wins + 1 
     const games = this.state.games + 1 
     const goal = this.state.goal
     let newUserScore = this.state.userScore + parseFloat(amount)
    
    
      if (newUserScore > goal) {
        alert("Your score is too high ")
        this.setState({
          games: games
        }) 
        this.resetGame()
      } else if (newUserScore < goal) {
        this.setState({
          userScore: newUserScore
        })
      } else if (newUserScore === goal) {
        alert("You won " )
        this.setState({
          wins: wins
        }) 
        this.resetGame()
      } else {
      alert("Ooops something went wrong.  Try again.")
    }
  }

  render() {
    return (
      <div className="App">
        <Titlebar />
        <Scoreboard wins={this.state.wins} gameScore={this.state.userScore} losses={this.state.games}/>
        <GoalBox userGoal={this.state.goal} startGame={this.startGame}/>
        <PlayArea gameState= {this.state} clickSum={this.sumBoxes}/>
        <Navbar />
      </div>
    );
  }
}

export default App;
