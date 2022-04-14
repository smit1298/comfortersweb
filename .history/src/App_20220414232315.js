import React from "react";
import HeaderTop from "./Components/nav/headerTop";
import HeaderBottom from "./Components/nav/headerBottom";
import Home from "./Components/Pages/Home/home";
import About from "./Components/Pages/About/about";
// import Gallery from "./Components/home/gallery";
import Contact from "./Components/Pages/Contact/contact";
// import Donate from "./Components/home/donate";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";

function App() {
  return (
    

      <div className="App">
        <HeaderTop /> 
        <HeaderBottom />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          {/* <Route exact path="/gallery" element={<Gallery />} /> */}
          <Route exact path="/contact/" element={<Contact />} />
          {/* <Route exact path="/donate" element={<Donate />} /> */}
          <Route component={<h4>Page not found</h4>} />

      </div>

    </Router>
  );
}

export default App;
