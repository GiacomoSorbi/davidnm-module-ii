import React from 'react'
import './TablesRisersFallers.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';


const TablesRisersFallers = () =>

<section>
  <section class="sectionContenedora">
    <section class="sectionContenedora2">
      <h3 class="h3first"><a href="#" onclick="myJsFuncCambiatabal('FTSE100');">FTSE100</a></h3>
      <h3><a href="#" onclick="myJsFuncCambiatabal('AIM100');">AIM100</a></h3>
      <h3><a href="#" onclick="myJsFuncCambiatabal('SmallCap');">Small Cap</a></h3>
    </section>
    <section class="sectionContenedora2" id="subidabajada">
      <div id="movers-risers" class="divtopflops">
        <p class="espaciosubidas"><strong>FTSE 100 risers</strong></p>
        <table class="subidas">
          <tbody><tr>
            <td class="tdbis"><a href="./shares.html?share=Rolls Royce Holdings Plc" title="View factsheet for Rolls Royce Holdings Plc" class="link-headline">Rolls Royce Holdings Plc</a></td>
            <td class="tdbis">297.70p</td>
            <td class="tdbis"><MaterialIcon icon="arrow_upward" color='green' /></td>
            <td class="tdbis">+18.32%</td>
          </tr>
          <tr class="tdsecondbis">
            <td class="tdsecondbis"><a href="./shares.html?share=Melrose Industries plc" title="View factsheet for Melrose Industries plc" class="link-headline">Melrose Industries plc</a></td>
            <td class="tdsecondbis">88.72p</td>
            <td class="tdsecondbis"><MaterialIcon icon="arrow_upward" color='green' /></td>
            <td class="tdsecondbis">+17.88%</td>
          </tr>
          <tr>
            <td class="tdbis"><a href="./shares.html?share=Carnival plc" title="View factsheet for Carnival plc" class="link-headline">Carnival plc</a></td>
            <td class="tdbis">721.40p</td>
            <td class="tdbis"><MaterialIcon icon="arrow_upward" color='green' /></td>
            <td class="tdbis">+17.34%</td>
          </tr>
          <tr class="tdsecondbis">
            <td class="tdsecondbis"><a href="./shares.html?share=Legal &amp; General Group plc" title="View factsheet for Legal &amp; General Group plc" class="link-headline">Legal &amp; General Group plc</a></td>
            <td class="tdsecondbis">186.30p</td>
            <td class="tdsecondbis"><MaterialIcon icon="arrow_upward" color='green' /></td>
            <td class="tdsecondbis">+16.66%</td>
          </tr>
          <tr>
            <td class="tdbis"><a href="./shares.html?share=Barratt Developments plc" title="View factsheet for Barratt Developments plc" class="link-headline">Barratt Developments plc</a></td>
            <td class="tdbis">447.40p</td>
            <td class="tdbis"><MaterialIcon icon="arrow_upward" color='green' /></td>
            <td class="tdbis">+16.42%</td>
          </tr>
        </tbody></table>
      </div>
      <div id="movers-fallers" class="divtopflops2">
        <p class="espaciobajadas"><strong>FTSE 100 fallers</strong></p>
        <table class="bajadas">
          <tbody><tr>
            <td class="tdbis"><a href="./shares.html?share=Sainsbury (J) plc" title="View factsheet for Sainsbury (J) plc" class="link-headline">Sainsbury (J) plc</a></td>
            <td class="tdbis">206.10p</td>
            <td class="tdbis"><MaterialIcon icon="arrow_upward" color='red' /></td>
            <td class="tdbis">-3.42%</td>
          </tr>
          <tr class="tdsecondbis">
            <td class="tdsecondbis"><a href="./shares.html?share=United Utilities Group Plc" title="View factsheet for United Utilities Group Plc" class="link-headline">United Utilities Group Plc</a></td>
            <td class="tdsecondbis">826.20p</td>
            <td class="tdsecondbis"><MaterialIcon icon="arrow_upward" color='red' /></td>
            <td class="tdsecondbis">-2.78%</td>
          </tr>
          <tr>
            <td class="tdbis"><a href="./shares.html?share=Halma plc" title="View factsheet for Halma plc" class="link-headline">Halma plc</a></td>
            <td class="tdbis">1,848.50p</td>
            <td class="tdbis"><MaterialIcon icon="arrow_upward" color='red' /></td>
            <td class="tdbis">2.17%</td>
          </tr>
          <tr class="tdsecondbis">
            <td class="tdsecondbis"><a href="./shares.html?share=London Stock Exchange Group plc" title="View factsheet for London Stock Exchange Group plc" class="link-headline">London Stock Exchange Group plc</a></td>
            <td class="tdsecondbis">7,064.00p</td>
            <td class="tdsecondbis"><MaterialIcon icon="arrow_upward" color='red' /></td>
            <td class="tdsecondbis">-1.89%</td>
          </tr>
          <tr>
            <td class="tdbis"><a href="./shares.html?share=Pennon Group" title="View factsheet for Pennon Group" class="link-headline">Pennon Group</a></td>
            <td class="tdbis">1,025.50p</td>
            <td class="tdbis"><MaterialIcon icon="arrow_upward" color='red' /></td>
            <td class="tdbis">-1.87%</td>
          </tr>
        </tbody></table>
      </div>
    </section>
  </section>
</section>

export default TablesRisersFallers