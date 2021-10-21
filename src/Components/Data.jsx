import React, { useState } from "react";

let weight,type;
function Data(props){
    const [count,setCount]=useState(props.default);

    function increment(){
        console.log("clikced inc");
        if(count<99)
        setCount(count+1);
    }

    function decrement(){
        if(count>1)
        setCount(count-1)
    }
   weight=count;
   type=props.type;
    return (
        <div className="data__setter">
            <h1 className="data-value--">{count}</h1>
            <div className="value-setter flex--">
                <span className="icon--" onClick={decrement}>-</span>
                <span className="setter--">{props.type}</span>
                <span className="icon--" onClick={increment}>+</span>
            </div>
        </div>
    )
}

export default Data;
export {weight,type} ;