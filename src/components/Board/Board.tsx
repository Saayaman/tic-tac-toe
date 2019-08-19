import React from 'react';
import Tile from '../Tile/Tile';
import "./Board.scss";


interface BoardProps {
  playerTurn: number;
  changePlayerTurn: () => void;
}

class Board extends React.Component<BoardProps> {

  state = {
    tileValues: []
  }

  handleClickTile = (num: number, playerTurn: number) => {
    console.log('number!', num);
    let currentState: Array<string | undefined> = this.state.tileValues;
    currentState[num] = playerTurn === 1 ? "⭕" : "❌";
    this.setState({
      tileValues: currentState,
    })

    this.props.changePlayerTurn();
  }

  renderTiles = ( ) => {
    let tiles = [];
    for (let i: number = 0; i < 9; ++i) {
      tiles.push(
        <Tile key={i}
          num={i}
          value={this.state.tileValues[i]}
          clickTile={this.handleClickTile}
          playerTurn={this.props.playerTurn} />
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