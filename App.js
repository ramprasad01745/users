import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Login from "./login";
import Listinguser from "./listinguser";
function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Link */}
        <Link to="/"></Link>
        
        {/* Your routes go here */}
        <Routes>
          <Route path="/" element={<Login />} />
         <Route path="/Users" element={<Listinguser/>} />
          {/* Other routes... */}
        </Routes>


      </div>
    </Router>

    
  );
}

export default App;



