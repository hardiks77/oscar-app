import React from "react";


export const AppContext = React.createContext();



export const AppProvider = (props) => {


    let [friendName, setName] = React.useState("");

    function nameAfterSignUp(givenName){
        setName(givenName);
    }

    return(
        <AppContext.Provider value={[friendName, nameAfterSignUp]}>
            {props.children}
        </AppContext.Provider>
    )
}

