import { React, useState } from "react";
import Die from './Die'

export default function App() {

    const [dice, setDice] = useState(allNewDice())

function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
        newDice.push(Math.floor(Math.random() * (6 - 1 + 1) + 1))

     }
     return newDice;
}

const diceElements = dice.map(die => {
    return(
        <Die value={die}/>
    )
})

return(
    <main>
        <div className="dice--container">
        {diceElements}
        </div>
    </main>
    
)

}
