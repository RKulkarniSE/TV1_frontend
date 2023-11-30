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

    const countZeros = (values) => {
      return (values.filter(value => value === 0).length/(values.length));
    }
    
    const gradient = (count) => {

      switch(count) {
        case 1: return 'red';
        case 0.75: return 'linear-gradient(to left, green 25%, red 75%)';
        case 0.5: return 'linear-gradient(to left, green 50%, red 50%)';
        case 0.25: return 'linear-gradient(to left, green 75%, red 25% )';
        default: return 'green';
      }
    }

    return (
      <div>
        <img src={backupMap} width={1000} style={{marginLeft:'-910px', marginTop:'50px'}}/>
        <div style={{ 
          position: 'absolute', 
          top: '400px',
          left: '750px', 
          padding: '6px', 
          borderRadius: '10px',
          background: gradient(countZeros([responseSCADA[9], responseSCADA[8]]))
          }}>
          <span><b>Callide</b></span>
        </div>

        <div style={{ position: 'absolute', top: '250px', left: '750px', backgroundColor: (responseSCADA[21] == 0 || responseSCADA[22] == 0 || responseSCADA[23] == 0 || responseSCADA[24] == 0) ? 'red': 'green', padding: '6px', borderRadius: '10px' }}>
        <span><b>Stanwell</b></span>
        </div>

        <div style={{ position: 'absolute', top: '430px', left: '850px', backgroundColor: (responseSCADA[26] == 0 || responseSCADA[27] == 0 || responseSCADA[28] == 0 || responseSCADA[29] == 0) ? 'red': 'green', padding: '6px', borderRadius: '10px' }}>
        <span><b>Tarong</b></span>
        </div>

        <div style={{ position: 'absolute', top: '470px', left: '850px', backgroundColor: (responseSCADA[10] == 0 ) ? 'red':'green', padding: '6px', borderRadius: '10px' }}>
        <span><b>Kogan Creek</b></span>
        </div>

        <div style={{ position: 'absolute', top: '600px', left: '550px', backgroundColor: (responseSCADA[0] == 0 ) ? 'red':'green', padding: '6px', borderRadius: '10px' }}>
        <span><b>Hallet</b></span>
        </div>

        <div style={{ position: 'absolute', top: '650px', left: '550px', backgroundColor: (responseSCADA[20] == 0 ) ? 'red':'green', padding: '6px', borderRadius: '10px' }}>
        <span><b>Osborne</b></span>
        </div>

        <div style={{ 
          position: 'absolute', 
          top: '150px',
          left: '700px', 
          padding: '6px', 
          borderRadius: '10px',
          background: gradient(countZeros([responseSCADA[1], responseSCADA[2]]))
          }}>
          <span><b>Barron Gorge</b></span>
        </div>

        <div style={{ position: 'absolute', top: '510px', left: '810px', backgroundColor: (responseSCADA[3] == 0 ) ? 'red':'green', padding: '6px', borderRadius: '10px' }}>
          <span><b>Braemar</b></span>
        </div>

        <div style={{ 
          position: 'absolute', 
          top: '540px', 
          left: '880px', 
          padding: '6px', 
          borderRadius: '10px',
          background: gradient(countZeros([responseSCADA[19], responseSCADA[18]]))
          }}>
        <span><b>Oakey</b></span>
        </div>

        <div style={{ 
        position: 'absolute', 
        top: '590px', 
        left: '710px', 
        padding: '6px', 
        borderRadius: '10px',
        background: gradient(countZeros([responseSCADA[4], responseSCADA[5], responseSCADA[6], responseSCADA[7]]))
        }}>
          <span><b>Bayswater</b></span>
        </div>

        <div style={{ position: 'absolute', top: '620px', left: '760px', backgroundColor: (responseSCADA[34] == 0 || responseSCADA[35] == 0) ? 'red': 'green', padding: '6px', borderRadius: '10px' }}>
          <span><b>Vales Point</b></span>
        </div>

        <div style={{ 
          position: 'absolute', 
          top: '660px', 
          left: '780px',
          padding: '6px', 
          borderRadius: '10px',
          background: gradient(countZeros([responseSCADA[16], responseSCADA[17]]))
          }}>
          <span><b>Mt Piper</b></span>
        </div>

        <div style={{ 
          position: 'absolute', 
          top: '660px', 
          left: '640px', 
          padding: '6px', 
          borderRadius: '10px',
          background: gradient(countZeros([responseSCADA[30], responseSCADA[31], responseSCADA[32], responseSCADA[33]]))
          }}>
          <span><b>Uranquinity</b></span>
        </div>

        <div style={{ position: 'absolute', top: '720px', left: '770px', backgroundColor: (responseSCADA[25] == 0) ? 'red': 'green', padding: '6px', borderRadius: '10px' }}>
          <span><b>Tallawarra</b></span>
        </div>

        <div style={{ position: 'absolute', top: '800px', left: '810px', backgroundColor: (responseSCADA[13] == 0) ? 'red': 'green', padding: '6px', borderRadius: '10px' }}>
          <span><b>Loy Yang</b></span>
        </div>

        <div style={{ 
          position: 'absolute', 
          top: '730px', 
          left: '610px', 
          padding: '6px', 
          borderRadius: '10px',
          background: gradient(countZeros([responseSCADA[14], responseSCADA[15]]))
          }}>
          <span><b>Mortlake</b></span>
        </div>

        <div style={{ 
        position: 'absolute', 
        top: '770px', 
        left: '610px', 
        padding: '6px', 
        borderRadius: '10px',
        background: gradient(countZeros([responseSCADA[11], responseSCADA[12]]))
        }}>
          <span><b>Laverton North</b></span>
        </div>


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