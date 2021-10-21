import React from "react";
import {Link} from "react-router-dom";

function Options(){
    return(
        <div className="flex-- options__menu">
            <Link to="/"><li className="options--">BMI</li></Link>
            <Link to="/Bmi"><li className="options--">MEMORY</li></Link>
            <Link to="/Bmi"><li className="options--">AGE</li></Link>
        </div>
    )
}

export default Options;