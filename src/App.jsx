import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import Cinematography from "./components/Cinematography";
import Producer from "./components/Producer";
import Work from "./components/Work";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="cinematography" element={<Cinematography />} />
          <Route path="cinematography/work" element={<Work />} />
          <Route path="producer" element={<Producer />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
