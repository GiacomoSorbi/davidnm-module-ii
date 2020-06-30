import React from 'react'
import './Chart.css'
import Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official';
import { ftse100 } from '../../constants'

const Chart = (vari="ftse100") => {

    const options =  {
        scrollbar: {
            hide: true
        },
        series: [            
          {
            name: {vari},
            data: ftse100
          }

        ]
      };
      

return (
<div class="divShares2"><HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={options}/></div>
)
}
export default Chart