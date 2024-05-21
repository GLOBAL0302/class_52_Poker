import Card from './Card.ts';

class PokerHand{
  constructor(
    public cardList:Card[],
    public result:string = ""
  ) {

    //findPairsFunc
    const findPairs = (value:Card[], num:number) =>{
      let ranksList = ""
      value.forEach((eachItem)=>{
        let amount =  value.filter(filterItem =>
          filterItem.rank === eachItem.rank
        )
        if (amount.length === num && !ranksList.includes(eachItem.rank.toString()))ranksList += eachItem.rank
      })
      return ranksList;
    }
    const cardsInRow: (number|string)[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    const sortListFunc = (arr: (string | number)[]) => {
      let numArr = arr.filter(
        item => typeof item === 'number')
        .sort((a, b) =>
          typeof a === 'number' && typeof b == 'number' ? a - b : 55);

      let strArr = arr.filter(item=> typeof item === 'string').sort();
      if (strArr.indexOf("A") !== -1){
        let strArrCopy = []
        strArr.forEach(elem => strArrCopy.push(elem))
        strArrCopy.push("A");
        strArr = strArrCopy.splice(1)
      }
      if(strArr.indexOf("K") !== -1 && strArr.indexOf("Q") !== -1){
        let kingIndex = strArr.indexOf("K");
        let queenIndex = strArr.indexOf("Q");
        strArr[kingIndex] = "Q";
        strArr[queenIndex] = "K";
      }
      return numArr.concat(strArr);
    };

    //findPairsComb
    const oneAndTwoPairsComb = (value:Card[]) =>{
        if (findPairs(value, 2).length ===1) {
          this.result = "Одна пара (англ. one pair)";
        }
        else if (findPairs(value, 2).length === 2){
          this.result = "Две пары (two pairs)";
        }
    }
    //three of a kind comb
    const threeOfKindComb = (value:Card[]) =>{
      if(findPairs(value, 3)) this.result = "Тройка (three of a kind):"
    }
    const straightComb = (value:Card[]) =>{
      let allRanks : (string| number)[] = []
      value.forEach(elem => allRanks.push(elem.rank))
      let allRanksSorted = sortListFunc(allRanks)
      let startIndex =  cardsInRow.indexOf(allRanksSorted[0])

      if(cardsInRow.splice(startIndex, allRanksSorted.length)
        .join("").trim() === allRanksSorted.join("").trim() && allRanksSorted.length >= 5){
        this.result = "Стрит (straight)";
      }
    }
    const flushComb =(value:Card[])=>{
      let total = value.filter(item=> value[0].suit === item.suit)
      if(total.length >= 5) this.result ="Флэш (flush)"
    }
    const fullHouseComb = (value:Card[])=>{
      let twoPairs = findPairs(value, 2);
      let threePairs = findPairs(value, 3);
      if(!twoPairs.includes(threePairs))this.result="Фулл-хаус (full house)";
    }
    const fourOfKind = (value:Card[])=>{

    }

    oneAndTwoPairsComb(this.cardList);
    threeOfKindComb(this.cardList);
    straightComb(this.cardList);
    flushComb(this.cardList);
    fullHouseComb(this.cardList);
    fourOfKind(this.cardList)









  }

}

export default PokerHand