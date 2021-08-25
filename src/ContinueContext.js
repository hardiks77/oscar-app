import React from "react";

export const ContinueContext = React.createContext();


export const ContinueProvider = (props) => {

    

    let [continueOrNot, setContinue] = React.useState(false);
    

    function defineContinue() {
        setContinue(true);
        console.log("clicked")
    }
    

   

    return (
        <ContinueContext.Provider value={[continueOrNot, defineContinue]}>
            {props.children}
        </ContinueContext.Provider>
    )
}