import {ICard, ISuitsSymbol} from '../types';
import React from 'react';
const Card: React.FC<ICard> = ({rank, suit}) => {
  const suitsSymbol:ISuitsSymbol= {
    "diams": "♦",
    "hearts": "♥",
    "clubs":"♣",
    "spades":"♠"}
  return (
    <span className={`card rank-${typeof rank === "string" ? rank.toLocaleLowerCase() : rank} ${suit}`} >
      <span className="rank">{rank}</span>
      <span className="suit">{suitsSymbol[suit]}</span>
    </span>
  );
};

export default Card;