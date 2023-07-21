import { createContext, useContext, useMemo, useState } from "react"

const langContext = createContext(null)
export const LanguageOption = {
    eng:{
        first:"this is exaple of text",
        second:"Please read carrefully"
    }, 
    ge:{
        first:"ეს არის ტექსიტის მაგალითი",
        second:"გთხოვთ წაილითხოთ ყურადღებით"
    }
}

const ContextProvider=({children})=>{

    const [isEng, setIsEng] = useState(true)

    const contextValue = useMemo(()=>({
        lang: isEng ? "eng" : "ge",
        toggle: ()=> setIsEng((prev)=>!prev)
    }))

    return(
        <langContext.Provider value={contextValue}>
            {children}
        </langContext.Provider>
    )
}

export const useLangContext =()=>{
    const contextValue = useContext(langContext)
    if(!contextValue) throw new Error("you are not provided to use this context")
    
    return contextValue
}
export default ContextProvider