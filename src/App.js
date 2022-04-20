// import Gallery from "./Components/home/gallery";
// import Donate from "./Components/home/donate";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

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