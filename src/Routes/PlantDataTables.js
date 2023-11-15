import React, {useState, useEffect} from "react"
import {FetchData} from "../FetchData"
import map from '../NEMMap.png'

export default function PlantDataTables(){
    const [responseDUID, setResponseDUID] = useState({})
    const [responseSCADA, setResponseSCADA] = useState({})
    const [responseCAPACITY, setResponseCAPACITY] = useState({})

    FetchData('TV1/SCADA', responseSCADA, setResponseSCADA)
    FetchData('TV1/DUID', responseDUID, setResponseDUID)
    FetchData('TV1/CAPACITY', responseCAPACITY, setResponseCAPACITY) 
    useEffect(() => {
      // Function to reload the page every 5 minutes (300,000 milliseconds)
      const reloadPage = () => {
        window.location.reload();
      };
  
      // Set up a timer to reload the page every 5 minutes
      const refreshInterval = 300000; 
      const refreshTimer = setTimeout(reloadPage, refreshInterval);
  
      return () => {
        clearTimeout(refreshTimer);
      };
    }, []);
    return (
      <div>
        <img src={map} width={1000} style={{marginRight:'1700px', marginTop:'200px'}}/>
        <br></br>
        <table style={{ fontSize:'20px', marginLeft:'1300px', marginTop:'-850px', border: '1px solid black' }}>
          <thead style={{backgroundColor: '#34ebeb', fontSize:'20px', fontWeight:'bold'}}>
            <tr>
              <th style={{border: '1px solid black', padding:'4px', backgroundColor: '#34ebeb'}}>POWER STATIONS</th>
              <th style={{border: '1px solid black', backgroundColor: '#34ebeb'}}>NEM DATA (MW)</th>
              <th style={{border: '1px solid black', backgroundColor: '#34ebeb'}}>CAPACITY (MW)</th>
            </tr>
          </thead>
          <tbody style={{fontWeight:'bold'}}>
            {Object.entries(responseSCADA).map(([index, value], i) => (
              <tr key={index} style={{border: '1px solid black'}}>
                <td style={{backgroundColor:'white', border: '1px solid black'}}>{responseDUID[i]}</td>
                <td style={{backgroundColor: value === 0 ? 'red': 'white', border: '1px solid black'}}>{value}</td>
                <td style={{backgroundColor:'white', border: '1px solid black'}}>{responseCAPACITY[i]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      );
        
} 