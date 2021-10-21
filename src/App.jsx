import React from "react";
import Navigation from "./Components/Navigation";
import Options from "./Components/Options";
import {BrowserRouter as BRouter,Switch,Route} from "react-router-dom";
import Bmi from "./Components/Bmi";
import NotFound from "./Components/NotFound";
import Calculate from "./Components/Calculate";


function App(){
    return(
        <React.Fragment>
           <Navigation/>
           <BRouter>
           <Options/>
           <Switch>
               <Route exact path="/" component={Bmi}/>
               <Route path="/Bmi" component={Bmi}/>
               <Route path="/Bmi" component={Bmi}/>
               <Route component={NotFound}/>
           </Switch>
           </BRouter>
           <Calculate/>
        </React.Fragment>
    )
}

export default App;