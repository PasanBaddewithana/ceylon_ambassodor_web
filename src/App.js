import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUsScreen from "./screens/contact_us/screens/ContactUsScreen";
import FAQ_Screen from "./screens/faq/screens/FAQ_Screen";
import HomePage from "./screens/Homepage/screen/HomePage";
import AboutUsScreen from "./screens/about/screens/AboutUsScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Set the initial route to HomePage */}
          <Route path="/" element={<HomePage />} />
          {/* Other routes */}
          <Route path="/contact-us" element={<ContactUsScreen />} />
          <Route path="/faq" element={<FAQ_Screen />} />
          <Route path="/about" element={<AboutUsScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
