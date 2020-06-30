import React from 'react'
import './BotonInvest.css'

const BotonInvest = () => {

  // When the user clicks on the button, open the Invest modal

    const onClick = (event) => {
        event.preventDefault();

        // Get the Invest modal
        const modal = document.getElementById("myModal");
                modal.style.display = "block";


    }
return (
<input class="botonInvest" id="investbutton" type="submit" value="INVEST" onClick={onClick} />
)
}
export default BotonInvest
