import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { HomePage, SharesPage } from "./pages";



function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/shares" exact component={SharesPage} />
    </Switch>
  );
}


export default App;
