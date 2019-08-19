import React from 'react';
import Tile from '../Tile/Tile';
import "./Board.scss";

class Board extends React.Component {

  state = {
    tiles: []
  }

  renderTiles = ( ) => {
    let tiles = [];
    for (let i: number = 0; i < 9; ++i) {
      tiles.push(
        <Tile key={i} num={i} />
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