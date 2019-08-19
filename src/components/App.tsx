import React from 'react';
import Board from './Board/Board';

class App extends React.Component{
  state = {
    playerTurn: 1,
  }
  render() {
    return (
      <div style={{ margin: "40px"}}>
        <Board playerTurn={this.state.playerTurn}/>
      </div>
    );
  }
}

export default App;
