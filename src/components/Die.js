import React from "react";
import dice1 from '../images/dice1.svg'
import dice2 from '../images/dice2.svg'
import dice3 from '../images/dice3.svg'
import dice4 from '../images/dice4.svg'
import dice5 from '../images/dice5.svg'
import dice6 from '../images/dice6.svg'


export default function Die(props) {

const styles = {backgroundColor: props.isHeld ? '#59E391' : ''}

const dices = [dice1, dice2, dice3, dice4, dice5, dice6]
const diceIndex = props.value - 1

    
    return(
        <div 
        className="die--box" 
        style={styles}
        onClick={() => props.holdDice(props.id, props.value)}
        >
        <img src={dices[diceIndex]} 
        alt="die-face" 
        className="dice--image" 
        />
        </div>
    )

}
