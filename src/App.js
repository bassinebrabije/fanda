import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Buy from './component/buy/buy';
import Rent from './component/rent/rent';
import Sell from './component/sell/sell';
import Contact from './component/contact';
import Footer from './component/footer';
import Home from './component/home';
import NotFound from './component/notfound'; // Corrected the component name here
import ArticleDetail from './component/buy/ArticleDetail'; // Import your ArticleDetail component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
