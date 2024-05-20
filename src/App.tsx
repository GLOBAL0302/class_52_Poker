
import './App.css';
import Card from './components/Card';
import {default as CardClass} from "lib/Card.ts"
import CardDeck from './lib/CardDeck.ts';
import React from 'react';
import PokerHand from './lib/PokerHand.ts';



let cardClass = new CardDeck();
function App() {
  const [cards, setCards]:CardClass[] = React.useState([])
  let roundResult:string = ""

  const checkRoundResult =(value:CardClass[])=>{
    let test =  new PokerHand(value);
    roundResult = test.result;
  }
  checkRoundResult(cards)

  const reStartTheGame = ():void=>{
    cardClass = new CardDeck();
    setCards(cardClass.getCards(5))
  }
  const dealCard = ()=> {
    setCards(cardClass.getCards(5))
  }

  return (
    <>
      <div id="wrapper">
        <div>
          <button
            onClick={cards.length >= 5? ()=>dealCard(): ()=>reStartTheGame()}
          >{cards.length >= 5? "Deal cards" : "Restart"}
          </button>
        </div>
        <div>
          <p style={{color:"black"}}>Result of round: <strong>{roundResult}</strong></p>
        </div>
        <div className="playingCards faceImages">
          {cards.map((oneCard:CardClass, index:number)=>(
            <Card
              rank={oneCard.rank}
              suit={oneCard.suit}
              key={`${index} + ${oneCard.rank} + ${oneCard.suit}`}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
