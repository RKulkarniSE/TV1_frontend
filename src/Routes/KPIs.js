import React, {useState, useEffect} from "react"
import { FetchKPIs } from "../FetchData"
import { PieChart } from "../PieChart"

export default function KPIs(){
    // const [tickPerProd, setTickPerProd] = useState({})
    // const [tickPerSite, setTickPerSite] = useState({})
    // const [tickByPri, setTickByPri] = useState({})
    // const [topTickets, setTopTickets] = useState({})

    const [tickPerProd, setTickPerProd] = useState(
        JSON.parse(localStorage.getItem("tickPerProd")) || {}
      )
      const [tickPerSite, setTickPerSite] = useState(
        JSON.parse(localStorage.getItem("tickPerSite")) || {}
      )
      const [tickByPri, setTickByPri] = useState(
        JSON.parse(localStorage.getItem("tickByPri")) || {}
      )
      const [topTickets, setTopTickets] = useState(
        JSON.parse(localStorage.getItem("topTickets")) || {}
      )

    const [startDate, setStartDate] = useState(localStorage.getItem('startDate') || '')
    const [endDate, setEndDate] = useState(localStorage.getItem('endDate') || '')

    const handleClick = () => {
        FetchKPIs('/KPI/TICKET_PER_PRODUCT', startDate, endDate, tickPerProd, setTickPerProd)
        FetchKPIs('/KPI/TICKET_PER_SITE', startDate, endDate, tickPerSite, setTickPerSite)
        FetchKPIs('/KPI/TICKET_BY_PRIORITY', startDate, endDate, tickByPri, setTickByPri)
        FetchKPIs('/KPI/TOP_TICKET_SITES', startDate, endDate, topTickets, setTopTickets)

    }

    useEffect(() => {
        localStorage.setItem("tickPerProd", JSON.stringify(tickPerProd));
        localStorage.setItem("tickPerSite", JSON.stringify(tickPerSite));
        localStorage.setItem("tickByPri", JSON.stringify(tickByPri));
        localStorage.setItem("topTickets", JSON.stringify(topTickets));
        localStorage.setItem("startDate", startDate);
        localStorage.setItem("endDate", endDate);
      }, [tickPerProd, tickPerSite, tickByPri, topTickets, startDate, endDate])

    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <div style={{marginLeft:'-1200px', fontSize:'30px'}} >Enter Range </div>
            <input style={{marginLeft:'-1200px', fontSize:'20px' }}
                type="text"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                placeholder="Start Date"
            />
            <input 
                style={{fontSize:'20px'}}
                type="text"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                placeholder="End Date"
            />

            <button style={{fontSize:'20px'}} onClick={handleClick}> Enter </button>
            <div style={{marginLeft:'1250px', marginTop:'-100px'}}>
                <b style={{fontSize:'20px', marginLeft:'10px'}}>Ticket Per Product</b> 
                {PieChart(tickPerProd, 'Product')}
            </div> 
            <div style={{marginTop:'10px',marginLeft:'500px'}}>
                <b style={{fontSize:'20px', marginLeft:'-700px'}}>Ticket per Site</b> 
                {PieChart(tickPerSite, 'Site')}
                
            </div> 
            <div style={{marginLeft:'1250px', marginTop:'-390px'}}>
                <b style={{fontSize:'20px'}}>Ticket by Priority </b>
                {PieChart(tickByPri, 'Priority')}
            </div> 

            <table style={{marginTop:'-800px' , marginLeft: '800px', fontSize:'25px', border: '1px solid black' }}>
            <thead style={{backgroundColor: '#34ebeb', fontSize:'25px', fontWeight:'bold'}}>
              Top 5 Sites By Ticket
            </thead> 
            <tbody style={{fontWeight:'bold'}}>
              {Object.entries(topTickets).map(([index, value]) => (
                <tr key={index} style={{border: '1px solid black', backgroundColor:'white'}}>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
            
        </div>
    )
}