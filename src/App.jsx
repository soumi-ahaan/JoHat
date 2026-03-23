import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import "./App.css";

import Header from "./Components/Layouts/Header/Header";
import Footer from "./Components/Layouts/Footer/Footer";

import HomeComponents from "./Components/Home/HomeComponents";
import AboutComponents from "./Components/About/AboutComponents";
import ServiceComponents from "./Components/Service/ServiceComponents";
import ContactComponents from "./Components/Contact/ContactComponents";
import PropertyDetails from "./Components/PropertyDetails/PropertyDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeComponents />} />
        <Route path="/about" element={<AboutComponents />} />
        <Route path="/service" element={<ServiceComponents />} />
        <Route path="/contact" element={<ContactComponents />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
