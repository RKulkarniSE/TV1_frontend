import React, {useEffect} from "react"
export default function FetchData(param, responseData, setResponseData){
    useEffect(() => {
        fetch(`http://127.0.0.1:8080/${param}`)
        .then(res => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json(); 
      })
        .then(data => {
            setResponseData(data)
        })
        .catch(error => console.error(`Error: ${error}`))

        
      }, []) 
  
}