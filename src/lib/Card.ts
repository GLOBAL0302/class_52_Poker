
class Card{
  constructor(
    public suit:string, public rank: (string | number)){
      this.rank = rank;
      this.suit = suit;
  }
}
export default Card;