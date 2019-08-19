import React from 'react';
import './Tile.scss';

interface TileProps {
  playerTurn: number;
  value: string;
  num: number;
  clickTile: (num: number, playerTurn: number) => void;
}

const Tile = ({ num, clickTile, value, playerTurn}: TileProps) => {

  return (
  <button onClick={() => clickTile(num, playerTurn)} className="Tile">{value}</button>
  )
}

// Tile.defaultProps = {
//   value: null,
// }

export default Tile;