import React from 'react'
import Chart from 'react-google-charts'

export function PieChart(inputData, header){

  // Convert JSON data into the required array format
    const dataArray = [[header, 'Tickets']].concat(Object.entries(inputData).map(([key, value]) => [key, value]));
   
    return(
        
        <div>
            <Chart 
                width={'600px'}
                height={'400px'}
                chartType="PieChart"
                data={dataArray}
                options={{
                    chartArea: {
                        left: '10%',
                        top: '10%',
                        width: '80%',
                        height: '80%'
                    },
                    fontSize: 20
                }}
            />
        </div>
    )
    
}
