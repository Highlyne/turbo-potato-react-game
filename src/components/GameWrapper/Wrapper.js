import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Scoreboard from '../Scoreboard/Scoreboard';
import GoalBox from '../GoalBox/GoalBox';
import PlayArea from '../PlayArea/PlayArea';
import {randValues} from '../../helper';
class Wrapper extends React.Component {

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
            <Container fluid id="scoreboard-container">
            <Jumbotron id="scoreboard-jumbotron" >
            <Container>
            <Row>
            <Col id="col" xs="auto">
            <Scoreboard wins={this.state.wins} gameScore={this.state.userScore} losses={this.state.games}/>
            </Col>
            <Col id="col" xs="auto">
            <a href="#" onClick={this.startGame}><img src="./images/bunny.png" /></a>
            
            </Col>
            <Col id="col" xs="3">
            <GoalBox userGoal={this.state.goal} gameScore={this.state.userScore} />
            </Col>
            </Row>
            <Row>
            <Col id="col" xs="12">

            <PlayArea gameState= {this.state} clickSum={this.sumBoxes}/>
            </Col>
            </Row>
            </Container>
            </Jumbotron>
            </Container>
        )
    }
}

export default Wrapper;