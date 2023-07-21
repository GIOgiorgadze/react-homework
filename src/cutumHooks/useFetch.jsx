import { useEffect, useState } from "react"

const useFetch = ({url, method}) =>{

  const[loading, setLoading] = useState(false);
  const[response, setResponse] = useState(null);
  const[error, setError] = useState(null);

  useEffect(()=>{
    setLoading(true)
    fetch(url,{
       method,
        headers:{
          "Content-Type":"application/json",
          "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
        }
   })
   .then(res => {
     if(!res.ok) throw new Error("response failed!");
     return res.json()
   })
   .then(data => setResponse(data))
   .catch(err => setError(err))
   .finally(()=>setLoading(false))

   return () => {
     setResponse(null)
     setError(null)
     setLoading(false)
   }
  },[url,method])

  return {loading, response, error}
}

export default useFetch