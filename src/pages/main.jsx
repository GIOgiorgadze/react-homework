import { LanguageOption, useLangContext } from "../constext/SetLanguage"

const MainPage =()=>{
    const {lang} = useLangContext()

    return(
        <div>
            <h1>{LanguageOption[lang].first}</h1>
            <p>{LanguageOption[lang].second}</p>
        </div>
    )
}

export default MainPage