import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { HomePage, SharesPage } from "./pages";



function App() {

  // When the user clicks anywhere outside of the Invest modal, close it
  window.onclick = function(event) {
      // Get the Invest modal
const modal = document.getElementById("myModal");
    if (event.target == modal) {      
      modal.style.display = "none";
    }
  }

  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/shares" exact component={SharesPage} />
    </Switch>
  );
}


export default App;
