import React from 'react';
import Board from './Board/Board';
import GameInfo from './GameInfo/GameInfo';

class App extends React.Component{
  state = {
    playerTurn: 1,
  }

  changePlayerTurn = () => {
    this.setState({
      playerTurn: this.state.playerTurn === 1 ? 2 : 1
    })
  }

  render() {
    return (
      <div style={{ margin: "40px"}}>
        <Board playerTurn={this.state.playerTurn} changePlayerTurn={this.changePlayerTurn} />
        <GameInfo />
      </div>
    );
  }
}

export default App;
