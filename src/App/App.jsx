import React, { useState, useEffect } from 'react'
import "./App.css";
import { Route, NavLink, useHistory } from 'react-router-dom';

function App (props) {
  return (
    <div className="App">
              <nav>
              <NavLink exact to='/'>DELIVERIES</NavLink>
              &nbsp;&nbsp;&nbsp;
              <NavLink exact to='/add'>ADD DELIVERY</NavLink>
          </nav>
        <main>
      
      </main>
  </div>
  );
}

export default App;