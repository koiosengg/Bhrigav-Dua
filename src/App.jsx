import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SocialSidebar from "./components/SocialSidebar";

const Home = lazy(() => import("./components/Home"));
const Cinematography = lazy(() => import("./components/Cinematography"));
const Producer = lazy(() => import("./components/Producer"));
const Work = lazy(() => import("./components/Work"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SocialSidebar />
      <Suspense fallback={<div style={{ minHeight: "100vh" }}></div>}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="cinematographer" element={<Cinematography />} />
            <Route path="cinematographer/work" element={<Work />} />
            <Route path="producer" element={<Producer />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
