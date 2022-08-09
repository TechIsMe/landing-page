import React from 'react';
import Home from './home/Home';
import './scss/main.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div >
      <Router>
      <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='/' element={<Home />} /> */}

        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
