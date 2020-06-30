import React from 'react'
import './ShareUpperBox.css'
import BotonInvest from '../BotonInvest'
import Modal from '../Modal'

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
  <BotonInvest></BotonInvest>
  <Modal></Modal>
  </section>
</section>

export default ShareUpperBox