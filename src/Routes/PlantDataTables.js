import React, {useState, useEffect} from "react"
import {FetchData} from "../FetchData"
import map from '../NEMMap.png'
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
        {/* <img src={map} width={1000} style={{marginRight:'1700px', marginTop:'200px'}}/> */}
        <img src={backupMap} width={1000} style={{marginLeft:'-910px', marginTop:'200px'}}/>
        <div style={{ position: 'absolute', top: '600px', left: '750px', backgroundColor: (responseSCADA[9] == 0 || responseSCADA[8] == 0) ? 'red': 'green', padding: '6px', borderRadius: '10px' }}>
        <span><b>Callide</b></span>
        </div>

        <div style={{ position: 'absolute', top: '550px', left: '750px', backgroundColor: (responseSCADA[21] == 0 || responseSCADA[22] == 0 || responseSCADA[23] == 0 || responseSCADA[24] == 0) ? 'red': 'green', padding: '6px', borderRadius: '10px' }}>
        <span><b>Stanwell</b></span>
        </div>

        <div style={{ position: 'absolute', top: '630px', left: '850px', backgroundColor: (responseSCADA[26] == 0 || responseSCADA[27] == 0 || responseSCADA[28] == 0 || responseSCADA[29] == 0) ? 'red': 'green', padding: '6px', borderRadius: '10px' }}>
        <span><b>Tarong</b></span>
        </div>

        <div style={{ position: 'absolute', top: '670px', left: '850px', backgroundColor: (responseSCADA[10] == 0 ) ? 'red':'green', padding: '6px', borderRadius: '10px' }}>
        <span><b>Kogan Creek</b></span>
        </div>

        <div style={{ position: 'absolute', top: '800px', left: '550px', backgroundColor: (responseSCADA[0] == 0 ) ? 'red':'green', padding: '6px', borderRadius: '10px' }}>
        <span><b>Hallet</b></span>
        </div>

        <div style={{ position: 'absolute', top: '850px', left: '550px', backgroundColor: (responseSCADA[20] == 0 ) ? 'red':'green', padding: '6px', borderRadius: '10px' }}>
        <span><b>Osborne</b></span>
        </div>

        <div style={{ position: 'absolute', top: '350px', left: '700px', backgroundColor: (responseSCADA[1] == 0 || responseSCADA[2] == 0) ? 'red': 'green', padding: '6px', borderRadius: '10px' }}>
          <span><b>Barron Gorge</b></span>
        </div>

        <div style={{ position: 'absolute', top: '710px', left: '810px', backgroundColor: (responseSCADA[3] == 0 ) ? 'red':'green', padding: '6px', borderRadius: '10px' }}>
          <span><b>Braemar</b></span>
        </div>

        <div style={{ position: 'absolute', top: '740px', left: '880px', backgroundColor: (responseSCADA[18] == 0 || responseSCADA[19] == 0) ? 'red': 'green', padding: '6px', borderRadius: '10px' }}>
        <span><b>Oakey</b></span>
        </div>

        <div style={{ position: 'absolute', top: '790px', left: '710px', backgroundColor: (responseSCADA[4] == 0 || responseSCADA[5] == 0 || responseSCADA[6] == 0 || responseSCADA[7] == 0) ? 'red':'green', padding: '6px', borderRadius: '10px' }}>
          <span><b>Bayswater</b></span>
        </div>

        <div style={{ position: 'absolute', top: '820px', left: '760px', backgroundColor: (responseSCADA[34] == 0 || responseSCADA[35] == 0) ? 'red': 'green', padding: '6px', borderRadius: '10px' }}>
          <span><b>Vales Point</b></span>
        </div>

        <div style={{ position: 'absolute', top: '860px', left: '780px', backgroundColor: (responseSCADA[16] == 0 || responseSCADA[17] == 0) ? 'red': 'green', padding: '6px', borderRadius: '10px' }}>
          <span><b>Mt Piper</b></span>
        </div>
        <div style={{ position: 'absolute', top: '860px', left: '640px', backgroundColor: (responseSCADA[30] == 0 || responseSCADA[31] == 0 || responseSCADA[32] == 0 || responseSCADA[33] == 0) ? 'red': 'green', padding: '6px', borderRadius: '10px' }}>
          <span><b>Uranquinity</b></span>
        </div>
        <div style={{ position: 'absolute', top: '920px', left: '770px', backgroundColor: (responseSCADA[25] == 0) ? 'red': 'green', padding: '6px', borderRadius: '10px' }}>
          <span><b>Tallawarra</b></span>
        </div>

        <div style={{ position: 'absolute', top: '1000px', left: '810px', backgroundColor: (responseSCADA[13] == 0) ? 'red': 'green', padding: '6px', borderRadius: '10px' }}>
          <span><b>Loy Yang</b></span>
        </div>

        <div style={{ position: 'absolute', top: '930px', left: '610px', backgroundColor: (responseSCADA[14] == 0 || responseSCADA[15] == 0) ? 'red': 'green', padding: '6px', borderRadius: '10px' }}>
          <span><b>Mortlake</b></span>
        </div>

        <div style={{ position: 'absolute', top: '970px', left: '610px', backgroundColor: (responseSCADA[11] == 0 || responseSCADA[12] == 0) ? 'red': 'green', padding: '6px', borderRadius: '10px' }}>
          <span><b>Laverton North</b></span>
        </div>


        <br></br>
        <table style={{ fontSize:'20px', marginLeft:'1300px', marginTop:'-900px', border: '1px solid black' }}>
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