import React from 'react';

class GameInfo extends React.Component<{ playerTurn: number, gameResult: string | null }> {
  render() {
    const { playerTurn, gameResult } = this.props;
    return (
      <div>
        <h1>Player's Turn: No. {playerTurn}</h1>
        <h1>Winner of the Game: {gameResult}</h1>
      </div>

    )
  }
}

export default GameInfo;