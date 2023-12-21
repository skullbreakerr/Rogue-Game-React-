import React from "react";
import "./style.css";
import ReactRogue from './ReactRogue.js';
const App=()=> (
  <div className="App">
    <h1 id="title">Rogue Game</h1>
    <h4 id="warning">Work in Progress</h4>
   <ReactRogue width={40} height={40} tilesize={16}/>
  </div>
);

export default App;