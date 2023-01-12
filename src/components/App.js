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
        <Die value={die.value} isHeld={die.isHeld} id={die.id}/>
    )
})


function rollDice(){
    setDice(() => allNewDice())
}

return(
    <main>
        <div className="dice--container">
        {diceElements}
        </div>
        <button className="roll--btn" onClick={rollDice}>Roll Dice</button>
    </main>
    
)

}
