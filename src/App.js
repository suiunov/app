import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/restaurants" element={<Restaurants />} />
        </Routes>
        <Routes>
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
        <Routes>
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
