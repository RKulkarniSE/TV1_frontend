import React, {useState, useEffect} from "react"
import { FetchKPIs } from "../FetchData"

export default function KPIs(){
    const [tickPerProd, setTickPerProd] = useState({})
    const [tickPerSite, setTickPerSite] = useState({})
    const [tickByPri, setTickByPri] = useState({})
    const [topTickets, setTopTickets] = useState({})

    const [startDate, setStartDate] = useState({})
    const [endDate, setEndDate] = useState({})

    const handleClick = () => {
        FetchKPIs('/KPI/TICKET_PER_PRODUCT', startDate, endDate, tickPerProd, setTickPerProd)
        FetchKPIs('/KPI/TICKET_PER_SITE', startDate, endDate, tickPerSite, setTickPerSite)
        FetchKPIs('/KPI/TICKET_BY_PRIORITY', startDate, endDate, tickByPri, setTickByPri)
        FetchKPIs('/KPI/TOP_TICKET_SITES', startDate, endDate, topTickets, setTopTickets)

    }
    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <input
                type="text"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                placeholder="Start Date"
            />
            <input
                type="text"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                placeholder="End Date"
            />

            <button onClick={handleClick}> Enter </button>
            <div><b>Ticket Per Product</b> {JSON.stringify(tickPerProd)}</div> <br></br>
            <div><b>Ticket per Site</b> {JSON.stringify(tickPerSite)}</div> <br></br>
            <div><b>Ticket by Priority </b>{JSON.stringify(tickByPri)}</div> <br></br>
            <div><b>Top 5 Sites by Ticket Number </b>{JSON.stringify(topTickets)}</div>
            
        </div>
    )
}