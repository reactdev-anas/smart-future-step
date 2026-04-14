import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutUs/AboutUs";
import Portfolio from "./components/portfolio/Portfolio";
import Career from "./components/career/Career";
import Contact from "./components/contact/Contact";
import CourseDetails from "./components/CourseDetails";
import Footer from "./components/Footer";
import Training from "./components/Training";
import WebDevelopment from "./components/services/WebDevelopment";
import AppDevelopment from "./components/services/AppDevelopment";
import DigitalMarketing from "./components/services/DigitalMarketing";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ScrollTop/>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courseDetails/:id" element={<CourseDetails />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/training" element={<Training/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
