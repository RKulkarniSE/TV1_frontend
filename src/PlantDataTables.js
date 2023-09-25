import React, {useState, useEffect} from "react"
import FetchData from "./FetchData"

export default function PlantDataTables(){
    const [responseDUID, setResponseDUID] = useState({})
    const [responseSCADA, setResponseSCADA] = useState({})

    FetchData('SCADA', responseSCADA, setResponseSCADA)
    FetchData('DUID', responseDUID, setResponseDUID) 
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
          <br></br>
          <table style={{ float: 'right', marginRight: '200px' }}>
            <thead>
              SCADA VALUE
            </thead>
            <tbody>
              {Object.entries(responseSCADA).map(([index, value]) => (
                <tr key={index}>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table style={{ float: 'right', marginRight: '30px' }}>
            <thead>
              Power Stations
            </thead>
            <tbody>
              {Object.entries(responseDUID).map(([index, value]) => (
                <tr key={index}>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
        
} 