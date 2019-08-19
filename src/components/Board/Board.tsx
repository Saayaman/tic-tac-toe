import React from 'react';
import Tile from '../Tile/Tile';
import "./Board.scss";


interface BoardProps {
  playerTurn: number;
  changePlayerTurn: (tileValues: Array<string | null>) => void;
  gameResult: string | null;
}

interface BoardState {
  tileValues: Array<string | null>
}

class Board extends React.Component<BoardProps, {tileValues: Array<string | null>}>{

  state = {
    tileValues: Array(9).fill(null),
  }

  handleClickTile = (num: number, playerTurn: number) => {
    const { tileValues } = this.state;
    let currentState: Array<string | null> = tileValues;
    currentState[num] = playerTurn === 1 ? "⭕" : "❌";
    this.setState({
      tileValues: currentState
    });
    this.props.changePlayerTurn(currentState);
  }

  renderTiles = ( ) => {
    let disabled = false;

    if (this.props.gameResult) {
        disabled = true;
    }
    let tiles = [];

    const { tileValues } = this.state;
    for (let i: number = 0; i < 9; ++i) {
      tiles.push(
        <Tile key={i}
          num={i}
          value={tileValues[i]}
          clickTile={this.handleClickTile}
          playerTurn={this.props.playerTurn}
          disabled={disabled}
          />
      )
    }

    return tiles;
  }

  render() {
    const tiles = this.renderTiles();
    return (
      <div className="Board-tiles">
        {tiles}
      </div>
    )
  }
}

export default Board;