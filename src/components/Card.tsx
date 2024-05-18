import {ICard} from '../types';
import React from 'react';
const Card: React.FC<ICard> = ({rank, suit}) => {
  return (
    <span className={`card rank-${rank} ${suit}`} >
      <span className="rank">{rank}</span>
      <span className="suit">♦</span>
    </span>
  );
};

export default Card;