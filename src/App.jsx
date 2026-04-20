import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import NTRACaseStudy from "./pages/NTRACaseStudy";
import { useDarkMode } from "./hooks/useDarkMode";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Pricing />
      <Contact />
    </>
  );
}

export default function App() {
  const { dark, toggle } = useDarkMode();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav dark={dark} onToggleDark={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/ntra-taxguide" element={<NTRACaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}
