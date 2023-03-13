import React from "react";
import './App.css';
import Ref from "./Hooks/use_ref/Ref";
/*import stateFunc from "./Hooks/use_state"*/
/*import Effect from "./Hooks/use_effect/Effect";*/
import { useState,createContext } from "react";
import DisplayName from "./Hooks/use_context/DisplayName";

export const AppContext = createContext(null);

/*const [name,setName]=useState("")
return(<div className="App"
       <div><h1>UseContext React Hook</h1></div>
       <AppContext.Provider value = {{name,setName}}>
        <GetName/>
        <br/><br/>
        <DisplayName/>
       </AppContext.Provider>
</div>)*/

function App () {
    return(
        <div className="App">
            <Ref/>
        </div>
    );
}


export default App;