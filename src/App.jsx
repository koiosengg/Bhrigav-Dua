import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import Cinematography from "./components/Cinematography";
import Producer from "./components/Producer";
import Work from "./components/Work";
import SocialSidebar from "./components/SocialSidebar";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SocialSidebar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="cinematographer" element={<Cinematography />} />
          <Route path="cinematographer/work" element={<Work />} />
          <Route path="producer" element={<Producer />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
