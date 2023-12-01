import React, {useState, useEffect} from "react"
import {FetchData} from "../FetchData"
import { PlantDataStation} from "../Dash1Functions"
import backupMap from '../AUSMap.png'

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
        <img src={backupMap} width={1000} style={{marginLeft:'-910px', marginTop:'50px'}}/>
        
        {PlantDataStation('400px', '750px', 'Callide', [responseSCADA[9], responseSCADA[8]])}

        {PlantDataStation('250px', '750px', 'Stanwell', [responseSCADA[21], responseSCADA[22], responseSCADA[23], responseSCADA[24]])}

        {PlantDataStation('430px', '850px', 'Tarong', [responseSCADA[26], responseSCADA[27], responseSCADA[28], responseSCADA[29]])}

        {PlantDataStation('470px', '850px', 'Kogan Creek', [responseSCADA[10]])}

        {PlantDataStation('600px', '550px', 'Hallet', [responseSCADA[0]])}
        
        {PlantDataStation('650px', '550px', 'Osborne', [responseSCADA[20]])}
        
        {PlantDataStation('150px', '700px', 'Barron Gorge', [responseSCADA[1], responseSCADA[2]])}

        {PlantDataStation('510px', '810px', 'Braemar', [responseSCADA[3]])}
        
        {PlantDataStation('540px', '880px', 'Oakey', [responseSCADA[19], responseSCADA[18]])}

        {PlantDataStation('590px', '710px', 'Bayswater', [responseSCADA[4], responseSCADA[5], responseSCADA[6], responseSCADA[7]])}
        
        {PlantDataStation('620px', '760px', 'Vales Point', [responseSCADA[34], responseSCADA[35]])}

        {PlantDataStation('660px', '780px', 'Mt Piper', [responseSCADA[16], responseSCADA[17]])}

        {PlantDataStation('720px', '770px', 'Tallawarra', [responseSCADA[25]])}
        
        {PlantDataStation('660px', '640px', 'Uranquinity', [responseSCADA[30], responseSCADA[31], responseSCADA[32], responseSCADA[33]])}
        
        {PlantDataStation('800px', '810px', 'Loy Yang', [responseSCADA[13]])}
        
        {PlantDataStation('730px', '610px', 'Mortlake', [responseSCADA[14], responseSCADA[15]])}

        {PlantDataStation('770px', '610px', 'Laverton North', [responseSCADA[11], responseSCADA[12]])}

        <br></br>
        <table style={{ fontSize:'20px', marginLeft:'1300px', marginTop:'-950px', border: '1px solid black' }}>
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