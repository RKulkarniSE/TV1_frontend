import React, {useEffect} from "react"
export function FetchData(param, responseData, setResponseData){
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

export function FetchKPIs(param, start_date, end_date, data, setData) {
  fetch(`http://127.0.0.1:8080/${param}?start_date=${start_date}-23&end_date=${end_date}`)
    .then(response => response.json())
    .then(data => {
      setData(data); // Update state with the fetched data
    })
    .catch(error => {
      console.error('Error fetching data from the server:', error);
  });
}