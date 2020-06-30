import React from 'react'
import './Chart.css'
import Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official';
import { ftse100 } from '../../constants'

const Chart = () => {

    const options = {
        scrollbar: {
            hide: true
        },
        series: [
          {
            data: ftse100
          }
        ]
      };
      

return (
<div class="divShares2" id="container"><HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={options}/></div>
)
}
export default Chart