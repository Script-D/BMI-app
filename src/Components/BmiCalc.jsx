import React from "react";
import Height from "./Height";
import Data from "./Data";

function BmiCalc(){
    return (
        <div className="calculation__ui">
           <Height default={1.4}/>
           <div className="flex--">
               <Data type={"AGE"} default={20}/>
               <Data type={"WEIGHT"} default={50}/>
           </div>
        </div>
    )
}

export default BmiCalc;