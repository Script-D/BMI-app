import React, { useEffect, useState } from "react";
import {heightProvider} from "./Height";
import {weight,type} from "./Data";

function Calculate(){
    const [res,setResult]=useState();
    useEffect(()=>{
        if(res>24.9)status={color:"#E45B5B"};
        else if(res<18.5)status={color:"#E68383"};
 },[res])
    let status;

    function getBmi(){
        let result;
        console.log("clicked");
        console.log("height is:",heightProvider);
        if(type==="WEIGHT")
        console.log(weight,type);
        if(heightProvider!==""&&weight!=="")
        result=weight/(heightProvider*heightProvider);
        result=Math.round(result);
        console.log(result);
        setResult(result);

    }
    return (
            <React.Fragment>
            <div className="flex-- result__card ">
                <div className=" flex-- bmi-result ">
                    <h1 className="result-type" style={status}>NORMAL</h1>
                    <h1 className="bmi-value--" style={status}>{res}</h1>
                </div>
                <div className="  flex-- bmi-details">
                    <div className="bmi-range">
                        <h1 className="title--">
                            NORMAL BMI RANGE
                        </h1>
                        <h1 className="range--">
                            18.5 - 24.9 KG/M<sup>2</sup>
                        </h1>
                    </div>
                    <p className="about-your-bmi--">You Have a Normal Body Weight, Keep Up</p>
                </div>
            </div>
        <div className="calculate__button flex--">
            <button className="calculate-button--" onClick={getBmi}>CALCULATE</button>
        </div>
        </React.Fragment>
    )
}

export default Calculate;
