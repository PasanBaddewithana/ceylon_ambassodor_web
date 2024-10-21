import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUsScreen from "./screens/contact_us/screens/ContactUsScreen";
import FAQ_Screen from "./screens/faq/screens/FAQ_Screen";
import BrandPulse from "./screens/Homepage/screen/BrandPulse";
import HomePage from "./screens/Homepage/screen/HomePage";
import AboutUsScreen from "./screens/about/screens/AboutUsScreen";
import GlobalNetworkScreen from "./screens/global_network/screens/GlobalNetworkScreen";

import Aerofly from "./screens/Homepage/screen/Aerofly";

import AvilablePositions from "./screens/aviable_positions/screens/AvilablePositions";
import BlogPage from "./blog/screens/BlogPage";
import MeetCrewScreen from "./screens/meet_crew/screens/MeetCrewScreen";
import ProfilePage from "./screens/meet_crew/screens/ProfileScreen";

import Khmergate from "./screens/Homepage/screen/Khmergate";

import OurClientScreen from "./screens/OurClients/screens/OurClientScreen";
import BookFrieghtScreen from "./screens/book_frieght/screens/BookFrieghtScreen";

function App() {
  return (
    <div className="">
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={15}
        color="255, 255, 153" // Light yellow color
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      /> */}

      <Router>
        <div className="">
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
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/aerofly" element={<Aerofly />} />
            <Route path="/meet-crew" element={<MeetCrewScreen />} />
            <Route path="/our-clients" element={<OurClientScreen />} />
            <Route path="/book-frieghts" element={<BookFrieghtScreen />} />
            <Route path="/profile/:name" element={<ProfilePage />} />
            <Route path="/khmergate" element={<Khmergate />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
