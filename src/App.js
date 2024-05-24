import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import WorkSection from "./components/WorkSection";
import TimeLine from "./components/Timeline";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <WorkSection />
      <TimeLine />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
