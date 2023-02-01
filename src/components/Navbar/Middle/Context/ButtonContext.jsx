import { createContext, useState } from "react";

const ButtonContext = createContext();
 function ProviderButton ({children }) {
    const [btn, setBtn] = useState(false)
    return(
        <ButtonContext.Provider value={{btn,setBtn}}>
            {children}
        </ButtonContext.Provider>
    )
 }
 export {ButtonContext, ProviderButton}