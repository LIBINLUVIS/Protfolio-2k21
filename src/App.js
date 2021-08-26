import React, { useState, useEffect } from "react";
import About from  './About';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return(
  <Router>

      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About}/>
          
     
      </Switch>
</Router>
  )

}



export default App;
