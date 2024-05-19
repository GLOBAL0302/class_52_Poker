import Card from './Card.ts';


class CardDeck{
  constructor(
    // for Test
    // public suits:string[] = ["diams", "hearts", "clubs", "spades"],
    // public ranks:string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
    public suits:string[] = ["spades"],
    public ranks:string[] = ["10", "J", "Q", "K", "A"],
    public allCards:Card[]= []
  ) {
    for (const i of this.suits){
      for (const j of this.ranks){
        this.allCards.push(new Card(i, j))
      }
    }
  }

  getCard():Card{
    const randomCard:number = Math.floor(Math.random() * (this.allCards.length - 1 - 0 + 1)) + 0;
    const cardToReturn = this.allCards[randomCard];
    this.allCards.splice(randomCard, 1);
    return cardToReturn
  }

  getCards(num: number):Card[]{
    if(num > this.allCards.length)num = this.allCards.length;
    const cardsToReturn:Card[] = [];
    for(let i = 0; i < num; i++){
      cardsToReturn.push(this.getCard())
    }
    return cardsToReturn
  }
}

export default CardDeck