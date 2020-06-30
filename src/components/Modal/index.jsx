import React from 'react'
import './Modal.css'

const Modal = () => {


  // When the user clicks on <span> (x), close the Invest modal
    const onClick = (event) => {
        event.preventDefault();

        // Get the Invest modal
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
 
    }

return (

<div id="myModal" class="modal">
<div class="modal__header">
  <span id="cierraModal" class="close" onClick={onClick}>&times;</span>
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
)
}
export default Modal
