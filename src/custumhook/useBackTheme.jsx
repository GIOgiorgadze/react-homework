import useDeviceTraker from "./useDeviceTraker"
import useLocalStorage from "./useLocalstorage"

const confTheme = {

    dark: {
        color: "black",
        background: 'white'
    },
    light: {
        color: 'darkgray',
        background: 'black'
    }
}

const useChangeTheme = () =>{

    const [theme , setTheme] = useLocalStorage("theme","light");
    const device = useDeviceTraker();

    const toggle = () =>{
        if(device === 'desktop'){
            setTheme((curentitem) => curentitem === 'light' ? 'dark' : 'light');
        }else{
            setTheme('light');
        }
    }
    return {theme: device === "desktop" ? confTheme[theme] : confTheme['light'], toggle}

}
export default useChangeTheme
