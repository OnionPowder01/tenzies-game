import React from "react";



export default function Die(props) {

const styles = {backgroundColor: props.isHeld ? '#59E391' : ''}

    return(
        <div 
        className="die--box" 
        style={styles}
        onClick={() => props.holdDice(props.id)}
        >
            <div className="die--value">{props.value}</div>
        </div>
    )

}