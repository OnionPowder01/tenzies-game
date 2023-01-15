import { React, useState, useEffect } from "react";
import Die from './Die'
import { nanoid } from "nanoid"

export default function App() {

const [dice, setDice] = useState(allNewDice())
const [number, setNumber] = useState(0)
const [count, setCount] = useState(0)
    
function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
        
    }
}
    
function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
        newDice.push(generateNewDie())  
     }
     
     return newDice;
}

const diceElements = dice.map(die => {
    return(
        <Die value={die.value} 
        isHeld={die.isHeld} 
        id={die.id}
        holdDice={holdDice}
        key={die.id}
        />
    )
})

function rollDice(){ 
    setDice(oldDice => oldDice.map(die => {
        return die.isHeld ?
        {...die} :
        generateNewDie()
    }))
}
       
    
function holdDice(diceId, diceNumber) {
    setCount(prevCount => prevCount + 1)

    if(number === 0) {
        firstDiceValue(diceId, diceNumber)
    }

    if(number === diceNumber || number === 0) {

    setDice(oldDice => oldDice.map(die => {
        return die.id === diceId ? 
        {...die, isHeld: !die.isHeld} :
        die
    }))
    }
    
}

useEffect(() => {
    if(dice.every((die) => die.isHeld === false)) {
        setNumber(0)
    }
},[count])



function firstDiceValue(diceID, diceNumber) {
    setNumber(diceNumber)
}

return(
    <main>
        
        <div className="dice--container" holdDice={holdDice}>
        {diceElements}
        </div>
        <button className="roll--btn" onClick={rollDice}>Roll Dice</button>
    </main>
    
)

}