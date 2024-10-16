import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUsScreen from "./screens/contact_us/screens/ContactUsScreen";
import FAQ_Screen from "./screens/faq/screens/FAQ_Screen";
import BrandPulse from "./screens/Homepage/screen/BrandPulse";
import HomePage from "./screens/Homepage/screen/HomePage";
import AboutUsScreen from "./screens/about/screens/AboutUsScreen";
import GlobalNetworkScreen from "./screens/global_network/screens/GlobalNetworkScreen";
import AvilablePositions from "./screens/aviable_positions/screens/AvilablePositions";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            {/* Set the initial route to HomePage */}
            <Route path="/" element={<HomePage />} />
            {/* Other routes */}
            <Route path="/contact-us" element={<ContactUsScreen />} />
            <Route path="/faq" element={<FAQ_Screen />} />
            <Route path="/about" element={<AboutUsScreen />} />
            <Route path="/global-network" element={<GlobalNetworkScreen />} />
            <Route path="/brand-pulse" element={<BrandPulse />} />
            <Route path="/avilable-positions" element={<AvilablePositions />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
