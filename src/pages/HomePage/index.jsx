import React from 'react'
import SearchBox from '../../components/SearchBox'
import TableMarkets from '../../components/TableMarkets'
import { TablesRisersFallers } from '../../components'

const HomePage = () => 

<main>
<section>
  <h1>SHARES - PRICES & STOCK MARKETS</h1>
  <SearchBox></SearchBox>
</section>

<section class="movil1">
  <h2>Stock markets</h2>
</section>
<TableMarkets></TableMarkets>

<section class="risersandfallers">
  <h2>Risers and fallers</h2>
</section>
<TablesRisersFallers></TablesRisersFallers>

<script src="chartfunctions.js"></script>
<script src="functionsCssChange.js"></script>
</main>




export default HomePage