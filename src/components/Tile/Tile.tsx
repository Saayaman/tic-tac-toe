import React from 'react';
import './Tile.scss';

interface TileProps {
  num: number;
}

const Tile = ({ num }: TileProps) => {
  return (
  <div className="Tile">{num}</div>
  )
}


export default Tile;