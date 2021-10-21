import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";

function Navigation(){
    return(
            <div className="flex-- navigation-menu">
                <Menu/>
                <Logo/>
            </div>
    )
}

export default Navigation;