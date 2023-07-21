import { createContext, useState } from "react"

const langContext = createContext(null)
export const store = {
    eng:"this is exaple",
    ge:"ეს არის მაგალითი"
}

const ContextProvider=()=>{

    const {lang, setLang} = useState(true)

    const toggle =()=>{
        {lang ?  }
    }

}