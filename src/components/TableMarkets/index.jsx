import React from 'react'
import './TableMarkets.css'
import Chart from '../Chart'
import MaterialIcon, {colorPalette} from 'material-icons-react';


const TableMarkets = () =>
<>
<section class="forMobile">
  <h3 class="h3first" id="tablaMercadosUK"><a href="#" onclick="myJsFuncCambiatabal('uk');">UK markets</a></h3>
  <h3 id="tablaMercadosMundo"><a href="#" onclick="myJsFuncCambiatabal('world');">World markets</a></h3>
</section>

<section>
  <table class="tableindices" id="indices">
    <tbody><tr>
      <td class="tdbis"><a href="#" onclick="myJsFunc('ftse100');">FTSE 100</a></td>
      <td class="tdbis">5,583.50</td>
      <td class="tdbis"><MaterialIcon icon="arrow_upward" color='green' /></td>
      <td class="tdbis">+168.00</td>
      <td class="tdbis">+3.10%</td>
    </tr>
    <tr class="tdsecondbis">
      <td class="tdsecondbis"><a href="#" onclick="myJsFunc('ftse250');">FTSE 250</a></td>
      <td class="tdsecondbis">14,807.14</td>
      <td class="tdsecondbis"><MaterialIcon icon="arrow_upward" color='green' /></td>
      <td class="tdsecondbis">+707.93</td>
      <td class="tdsecondbis">+5.02%</td>
    </tr>
    <tr>
      <td class="tdbis"><a href="#" onclick="myJsFunc('ftse350');">FTSE 350</a></td>
      <td class="tdbis">3,099.04</td>
      <td class="tdbis"><MaterialIcon icon="arrow_upward" color='green' /></td>
      <td class="tdbis">+102.07</td>
      <td class="tdbis">+3.41%</td>
    </tr>
    <tr class="tdsecondbis">
      <td class="tdsecondbis"><a href="#" onclick="myJsFunc('ftseAllShare');">FTSE All Share</a></td>
      <td class="tdsecondbis">3,058.79</td>
      <td class="tdsecondbis"><MaterialIcon icon="arrow_upward" color='green' /></td>
      <td class="tdsecondbis">+100.39</td>
      <td class="tdsecondbis">+3.39%</td>
    </tr>
    <tr class="tdbis">
      <td class="tdbis"><a href="#" onclick="myJsFunc('ftseTechMARK100');">FTSE techMARK 100</a></td>
      <td class="tdbis">4,517.20</td>
      <td class="tdbis"><MaterialIcon icon="arrow_upward" color='green' /></td>
      <td class="tdbis">+157.89</td>
      <td class="tdbis">+3.62%</td>
    </tr>
    <tr class="tdsecondbis">
      <td class="tdsecondbis"><a href="#" onclick="myJsFunc('ftseSmallCap');">FTSE Small Cap</a></td>
      <td class="tdsecondbis">4,282.64</td>
      <td class="tdsecondbis"><MaterialIcon icon="arrow_upward" color='green' /></td>
      <td class="tdsecondbis">+136.08</td>
      <td class="tdsecondbis">+3.28%</td>
    </tr>
    <tr class="">
      <td class="tdbis"><a href="#" onclick="myJsFunc('ftseAim100');">FTSE AIM 100</a></td>
      <td class="tdbis">3,460.62</td>
      <td class="tdbis"><MaterialIcon icon="arrow_upward" color='green' /></td>
      <td class="tdbis">+112.80</td>
      <td class="tdbis">+3.37%</td>
    </tr>
  </tbody></table>
  <Chart></Chart>
</section>
</>

export default TableMarkets