import React from 'react'
import SearchBox from '../../components/SearchBox'
import ShareUpperBox from '../../components/ShareUpperBox'
import ShareAtAGlance from '../../components/ShareAtAGlance'
import Chart from '../../components/Chart'
import TableFundamentalData from '../../components/TableFundamentalData'
import TablesPerformanceAndDividends from '../../components/TablesPerformanceAndDividends'



const SharesPage = () => 

<main>
        
<section>
  <h1 id="log">SHARES</h1>
  <SearchBox></SearchBox>
</section>
<ShareUpperBox></ShareUpperBox>

<section>
  <h2>At A Glance</h2>
</section>  
<ShareAtAGlance></ShareAtAGlance>

<section class="contenedoraGrafica">
<TableFundamentalData></TableFundamentalData>
<Chart></Chart>
</section>

<TablesPerformanceAndDividends></TablesPerformanceAndDividends>
</main>

export default SharesPage