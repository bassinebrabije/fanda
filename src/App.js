import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Buy from './component/buy/buy';
import Rent from './component/rent/rent';
import New from './component/new/new';
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
        <Route path="/Acheter" element={<Buy />} />
        <Route path="/Louer" element={<Rent />} />
        <Route path="/Neufs" element={<New />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Annonce/:id" element={<ArticleDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
