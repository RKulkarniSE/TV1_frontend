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
        <div >
          <img src={map} width={1000} style={{marginRight:'1700px', marginTop:'200px'}}/>
          <br></br>

          <table className="NEMTable" style={{ float: 'right', marginTop:'-850px', marginRight: '200px', fontSize:'20px' }}>
            <thead style={{backgroundColor: '#34ebeb', fontSize:'20px', fontWeight:'bold'}}>
              NEM DATA (MW)
            </thead> 
            <tbody style={{fontWeight:'bold'}}>
              {Object.entries(responseSCADA).map(([index, value]) => (
                <tr key={index} style={{border: '1px solid black', backgroundColor:'white'}}>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table style={{ float: 'right', marginTop:'-850px' , marginRight: '30px', fontSize:'20px' }}>
            <thead style={{backgroundColor: '#34ebeb', fontSize:'20px', fontWeight:'bold'}}>
              POWER STATIONS
            </thead>
            <tbody style={{fontWeight:'bold'}}>
              {Object.entries(responseDUID).map(([index, value]) => (
                <tr key={index} style={{border: '1px solid black', backgroundColor:'white'}}>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table style={{float:'right', marginTop:'-850px', marginRight:'-530px', fontSize:'20px'}}>
          <thead style={{backgroundColor: '#34ebeb', fontSize:'20px', fontWeight:'bold'}}>
              CAPACITY (MW)
          </thead>
          <tbody style={{fontWeight:'bold'}}>
            {Object.entries(responseCAPACITY).map(([index, value]) => (
              <tr key={index} style={{border: '1px solid black', backgroundColor:'white'}}>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      );
        
} 