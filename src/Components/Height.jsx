import React,{useState} from "react";

 let heightProvider=1.4;
function Height(props){
 const [height,setHeight]=useState(props.default);

    function getHeight(e){
        heightProvider=e.target.value
        setHeight(e.target.value);
    }
    return (
        <div className="height__range">
            <div className="height-value flex--">
                <span className="height--">HEIGHT</span>
                <span className="value-height--">{height}m</span>
            </div>
            <input type="range" className="height-range--" min="0.4" max="3" step="0.1" onChange={getHeight}
            value={height}/>
        </div>
    )
}

export default Height;
export {heightProvider};
