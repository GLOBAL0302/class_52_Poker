import Card from './Card.ts';

class PokerHand{
  constructor(
    public cardList:Card[],
    public result:string = ""
  ) {
    let b = (this.cardList.filter(
      item => {
        return (item.suit === cardList[0].suit) && ('10, J, Q, K, A'.includes(item.rank));
      })
    );
  }

}

export default PokerHand