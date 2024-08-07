import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar'
import Buy from './component/buy/buy';
import More from './component/buy/more';
import Rent from './component/rent/rent';
import Sell from './component/sell/sell';
import FAQ from './component/faq/faq';
import Contact from './component/contact';
import Footer from './component/footer'
import Home from './component/home'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/more" element={<More />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
