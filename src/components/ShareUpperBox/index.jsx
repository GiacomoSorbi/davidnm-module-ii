import React from 'react'
import './ShareUpperBox.css'

const ShareUpperBox = () =>

<section class="recuadro">
  <section class="recuadroDentro">
    <div class="recuadrocabecera">
      <p class="separador">Sell:57.92p</p>
      <p class="separador2">|</p>
      <p class="separador">Buy:57.94p</p>
      <p class="separador2">|</p>
      <p class="separador"><i class="material-icons" style={{color:"green"}}>arrow_upward</i> 0.5p (1.3%)</p>
    </div>
    <div class="recuadrocabecera2">
      <p class="separador">FTSE 100: <i class="material-icons" style={{color:"green"}}>arrow_upward</i>1.09%</p>
    </div>
  </section>  
  <section class="recuadroDentro2">
    <input class="botonInvest" id="investbutton" type="submit" value="INVEST"/>
    
    <div id="myModal" class="modal">
      <div class="modal__header">
        <span id="cierraModal" class="close">&times;</span>
      </div>
      <div class="modal-content"> 
        <div class="group3">
          <div class="par2">
            <label><b>order type</b></label> 
            <select class="inputForm" id="orders">
              <option value="Limit">Limit</option>
              <option value="Market">Market</option>
            </select>
          </div> 
          <div class="par2">
            <label><b>Price</b></label> 
            <input class="inputForm" type="text" placeholder="00.00" name="price" required/> 
          </div>
          <div class="par2">
            <label><b>Nº of titles</b></label> 
            <input class="inputForm" type="number" placeholder="0" name="titles" required/> 
          </div>
        </div>
        <div class="clearfix"> 
          <button type="submit" class="signupbtn">BUY</button> 
          <button type="button" class="cancelbtn">SELL</button> 
        </div> 
      </div>
    </div>
  </section>
</section>

export default ShareUpperBox