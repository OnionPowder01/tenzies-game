import { React, useState } from "react";
import Die from './Die'
import { nanoid } from "nanoid"

export default function App() {

    const [dice, setDice] = useState(allNewDice())
    

function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
        newDice.push({
            value: Math.ceil(Math.random() * 6), 
            isHeld: false,
            id: nanoid()
        })  
     }
     
     return newDice;
}

const diceElements = dice.map(die => {
    return(
        <Die value={die.value} 
        isHeld={die.isHeld} 
        id={die.id}
        holdDice={holdDice}
        />
    )
})

function rollDice(){
    setDice(() => allNewDice())
}

function holdDice(diceId) {
    console.log(diceId)
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
