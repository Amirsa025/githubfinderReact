import React from "react";
import NavBar from "./components/layout/NavBar";
// import axios from "axios";
import User from "./components/Users/Users";
import GitHubState from './components/Context/gihubState'
function App() {

   
      return (
  
       <GitHubState>
       <NavBar  />
        <User />
       </GitHubState>

  );
}

export default App;
