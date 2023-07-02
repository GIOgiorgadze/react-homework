import { useEffect, useState } from "react"

const breakpoint = 578

const trackDevice = () =>{

    return document.documentElement.getBoundingClientRect().width <= breakpoint ? "mobile" : "desktop"
}

const useDeviceTraker = () =>{

    const[width , setWidth] = useState(() => trackDevice())
    useEffect(()=>{
        const handleResize = () => {
            setWidth(trackDevice());
        }
        window.addEventListener('resize', handleResize);
        return () => window.addEventListener('resize', handleResize);
    },[])

    return width
}

export default useDeviceTraker