import Card from './Card.ts';

class PokerHand{
  constructor(
    public cardList:Card[],
    public result:string = ""
  ) {
    // royal_flush
    const royal_flush = (this.cardList.filter(
      item => {
        return (item.suit === cardList[0].suit) && ('10, J, Q, K, A'.includes(item.rank));
      })
    );
    if (royal_flush.length >=5 )this.result = "Роял-флэш (Royal flush)";

    // straight_flush
    const straight_flush_example = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    const sortListFunc = (arr:(string|number)[])=>{
      let numArr = arr.filter(item => typeof item === "number").sort((a, b)=> a - b);
      let strArr = arr.filter(item => typeof item === "string").sort();
      return numArr.concat(strArr);
    }
    const straight_flush_oneSuit:Card[] =  (this.cardList.filter(
      item=> {
        return (item.suit===cardList[0].suit)
      }
    ))
    const straight_flush_list = (value:Card[]) => {
      let sortList:(string|number)[] = [];
      value.forEach(item => sortList.push(item.rank))
      return sortList
    }
    let checkStraightFlush= sortListFunc(straight_flush_list(straight_flush_oneSuit)).join("");
    let exampleIndex =  straight_flush_example.findIndex(item => item == checkStraightFlush[0])
    let checkTwoString =  (checkStraightFlush == straight_flush_example.splice(exampleIndex, checkStraightFlush.length).join(""))
    if(checkTwoString && checkStraightFlush.length >= 5)this.result = "Стрит-флэш (straight flush)"
  }

}

export default PokerHand