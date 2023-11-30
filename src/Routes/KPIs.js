import React, {useState, useEffect} from "react"
import { FetchKPIs } from "../FetchData"
import { PieChart } from "../PieChart"

export default function KPIs(){
    const currentDate = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

    const formatDate = (date) => {
      const year = String(date.getFullYear());
      const month = String(date.getMonth() + 1).padStart(2, '0'); 
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    
    const currentDateString = formatDate(currentDate);
    const sixMonthsAgoString = formatDate(sixMonthsAgo);


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

    const [startDate, setStartDate] = useState(localStorage.getItem('sixMonthsAgoString') || '')
    const [endDate, setEndDate] = useState(localStorage.getItem('currentDateString') || '')

    const handleClick = () => {
        console.log(`handleClick()`)
        FetchKPIs('/KPI/TICKET_PER_PRODUCT', startDate, endDate, tickPerProd, setTickPerProd)
        FetchKPIs('/KPI/TICKET_PER_SITE', startDate, endDate, tickPerSite, setTickPerSite)
        FetchKPIs('/KPI/TICKET_BY_PRIORITY', startDate, endDate, tickByPri, setTickByPri)
        FetchKPIs('/KPI/TOP_TICKET_SITES', startDate, endDate, topTickets, setTopTickets)
    }

    useEffect(() => {
        console.log(`useEffect()`)
        localStorage.setItem("tickPerProd", JSON.stringify(tickPerProd));
        localStorage.setItem("tickPerSite", JSON.stringify(tickPerSite));
        localStorage.setItem("tickByPri", JSON.stringify(tickByPri));
        localStorage.setItem("topTickets", JSON.stringify(topTickets));
        localStorage.setItem("currentDateString", currentDateString);
        localStorage.setItem("sixMonthsAgoString", sixMonthsAgoString);
      }, [tickPerProd, tickPerSite, tickByPri, topTickets, currentDateString, sixMonthsAgoString])

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
                placeholder={startDate}
            />
            <input 
                style={{fontSize:'20px'}}
                type="text"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                placeholder={endDate}
            />

            <button style={{fontSize:'20px'}} onClick={handleClick}> Enter </button>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginTop:'10px' }}>
            <div>
              <b style={{fontSize:'25px'}}>Ticket Per Product</b> 
              {PieChart(tickPerProd, 'Product')}
            </div>
            <div>
              <b style={{fontSize:'25px'}}>Ticket per Site</b> 
              {PieChart(tickPerSite, 'Site')}
            </div>
            <div>
              <b style={{fontSize:'25px'}}>Ticket by Priority </b>
              {PieChart(tickByPri, 'Priority')}
            </div>
          </div>

          <table style={{ marginLeft: '800px', marginTop:'20px', fontSize:'25px', border: '1px solid black' }}>
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