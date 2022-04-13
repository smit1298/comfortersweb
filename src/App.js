// import Gallery from "./Components/home/gallery";
// import Donate from "./Components/home/donate";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route exact path="/gallery" element={<Gallery />} /> */}
      <Route path="/contact" element={<Contact />} />
      {/* <Route exact path="/donate" element={<Donate />} /> */}
      <Route component={<h4>404 - Page not found</h4>} />
    </Routes>
    <Footer />
  </Router>
);

export default App;