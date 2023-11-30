import React, {useState, useEffect} from "react"
import { FetchData } from "../FetchData"

export default function Footprints(){
    const [assignees, setAssignees] = useState({})
    const [submitted, setSubmitted] = useState({})
    const [status, setStatus] = useState({})
    const [ticket, setTicket] = useState({})
    const [account, setAccount] = useState({})
    const [product, setProduct] = useState({})

    const font = '20px'

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

      return (
        <div style={{ display: 'flex' }}>
            <table style={{ marginTop: '20px', fontSize: font}}>
                <thead style={{fontSize: '20px', fontWeight: 'bold' }}>
                    <tr>
                        <th style={{ border: '1px solid black', backgroundColor: '#34ebeb' }}>Assignees</th>
                        <th style={{ border: '1px solid black', backgroundColor: '#34ebeb' }}>Submitted</th>
                        <th style={{ border: '1px solid black', backgroundColor: '#34ebeb' }}>Status</th>
                        <th style={{ border: '1px solid black', backgroundColor: '#34ebeb' }}>Ticket</th>
                        <th style={{ border: '1px solid black', backgroundColor: '#34ebeb' }}>Account</th>
                        <th style={{ border: '1px solid black', backgroundColor: '#34ebeb' }}>Title</th>
                    </tr>
                </thead>
                <tbody style={{ fontWeight: 'bold' }}>
                    {Object.keys(assignees).map(([index]) => (
                        <tr key={index} style={{ border: '1px solid black', backgroundColor: 'white', fontSize:'20px' }}>
                            <td style={{ border: '1px solid black' }}>{assignees[index]}</td>
                            <td style={{ border: '1px solid black', width:'150px' }}>{submitted[index]}</td>
                            <td style={{ border: '1px solid black',
                             backgroundColor: status[index] == 'In Progress' ? 'orange' : (status[index] == 'Resolved' ? '#10c239' : 'white') }}>{status[index]}</td>
                            <td style={{ border: '1px solid black' }}>{ticket[index]}</td>
                            <td style={{ border: '1px solid black' }}>{account[index]}</td>
                            <td style={{ border: '1px solid black' }}>{product[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}