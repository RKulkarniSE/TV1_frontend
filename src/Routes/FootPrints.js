import React, {useState, useEffect} from "react"
import FetchData from "../FetchData"

export default function Footprints(){
    const [assignees, setAssignees] = useState({})
    const [submitted, setSubmitted] = useState({})
    const [status, setStatus] = useState({})
    const [ticket, setTicket] = useState({})
    const [account, setAccount] = useState({})
    const [product, setProduct] = useState({})

    FetchData('/FOOTPRINTS/ASSIGNEES', assignees, setAssignees)
    FetchData('/FOOTPRINTS/SUBMITTED', submitted, setSubmitted)
    FetchData('/FOOTPRINTS/STATUS', status, setStatus) 
    FetchData('/FOOTPRINTS/TICKET', ticket, setTicket)
    FetchData('/FOOTPRINTS/ACCOUNT', account, setAccount)
    FetchData('/FOOTPRINTS/PRODUCT', product, setProduct) 

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

      return(
        <div style={{display:'flex'}}>
            <table style={{marginTop:'20px', marginRight: '200px', fontSize:'15px' }}>
            <thead style={{backgroundColor: '#34ebeb', fontSize:'20px', fontWeight:'bold'}}>
              Assignees
            </thead> 
            <tbody style={{fontWeight:'bold'}}>
              {Object.entries(assignees).map(([index, value]) => (
                <tr key={index}>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table style={{marginTop:'20px' , marginLeft: '-190px', fontSize:'15px' }}>
            <thead style={{backgroundColor: '#34ebeb', fontSize:'20px', fontWeight:'bold'}}>
              Date Submitted
            </thead> 
            <tbody style={{fontWeight:'bold'}}>
              {Object.entries(submitted).map(([index, value]) => (
                <tr key={index}>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table style={{marginTop:'20px' , marginLeft: '20px', fontSize:'15px' }}>
            <thead style={{backgroundColor: '#34ebeb', fontSize:'20px', fontWeight:'bold'}}>
              Status
            </thead> 
            <tbody style={{fontWeight:'bold'}}>
              {Object.entries(status).map(([index, value]) => (
                <tr key={index}>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <table style={{marginTop:'20px' , marginLeft: '20px', fontSize:'15px' }}>
            <thead style={{backgroundColor: '#34ebeb', fontSize:'20px', fontWeight:'bold'}}>
              Ticket No
            </thead> 
            <tbody style={{fontWeight:'bold'}}>
              {Object.entries(ticket).map(([index, value]) => (
                <tr key={index}>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table style={{marginTop:'20px' , marginLeft: '20px', fontSize:'15px' }}>
            <thead style={{backgroundColor: '#34ebeb', fontSize:'20px', fontWeight:'bold'}}>
              Account
            </thead> 
            <tbody style={{fontWeight:'bold'}}>
              {Object.entries(account).map(([index, value]) => (
                <tr key={index}>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table style={{marginTop:'20px' , marginLeft: '20px', fontSize:'15px' }}>
            <thead style={{backgroundColor: '#34ebeb', fontSize:'20px', fontWeight:'bold'}}>
              Product
            </thead> 
            <tbody style={{fontWeight:'bold'}}>
              {Object.entries(product).map(([index, value]) => (
                <tr key={index}>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
}