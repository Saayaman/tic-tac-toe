import React from 'react';
import Board from './Board/Board';
import GameInfo from './GameInfo/GameInfo';
import { calculateWinner } from '../functions/calculate';

class App extends React.Component{
  state = {
    playerTurn: 1,
    gameResult: null,
  }

  changePlayerTurn = (tileValues : Array<string | null>) => {
    this.setState({
      playerTurn: this.state.playerTurn === 1 ? 2 : 1,
      gameResult: calculateWinner(tileValues)
    })
  }

  render() {
    const { playerTurn, gameResult } = this.state;
    return (
      <div style={{ margin: "40px"}}>
        <Board 
          playerTurn={this.state.playerTurn}
          changePlayerTurn={this.changePlayerTurn}
          gameResult={gameResult}
        />
        <GameInfo playerTurn={playerTurn} gameResult={gameResult} />
      </div>
    );
  }
}

export default App;
