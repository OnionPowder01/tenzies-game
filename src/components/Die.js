import React from "react";


export default function Die(props) {
console.log(props)

    return(
        <div className="die--box">
            <div className="die--value">{props.value}</div>
        </div>
    )

}