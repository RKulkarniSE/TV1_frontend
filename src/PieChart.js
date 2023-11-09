import React from 'react'
import Chart from 'react-google-charts'

export function PieChart(inputData, header){

  // Convert JSON data into the required array format
    const dataArray = [[header, 'Tickets']].concat(Object.entries(inputData).map(([key, value]) => [key, value]));
   
    return(
        
        <div>
            <Chart 
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                data={dataArray}
            />
        </div>
    )
    
}

// 2020-03-23  2020-11-11