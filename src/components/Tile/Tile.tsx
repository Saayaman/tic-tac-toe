import React from 'react';
import './Tile.scss';

interface TileProps {
  playerTurn: number;
  value: string;
  num: number;
  disabled: boolean;
  clickTile: (num: number, playerTurn: number) => void;
}

const Tile = ({ num, clickTile, value, playerTurn, disabled }: TileProps) => {

  return (
  <button disabled={disabled} onClick={() => clickTile(num, playerTurn)} className="Tile">{value}</button>
  )
}

// Tile.defaultProps = {
//   value: null,
// }

export default Tile;