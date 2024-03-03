import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import About from './component/About';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${isLoaded ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}>
        <nav className="flex flex-col items-center justify-between p-4 bg-blue-800 md:flex-row">
          <div className="flex items-center">
            <h1 className="mr-4 text-lg font-bold text-white">YOINI WEBSITE</h1>
            <div className="flex items-center bg-white border border-gray-300 rounded-lg md:hidden">
              <button onClick={toggleMenu} className="px-3 py-2 transition duration-300 ease-in-out transform focus:outline-none hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
          <div className={`md:flex items-center transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex justify-end">
              <li className="mr-6">
                <Link to="/component/Home" className="text-white transition duration-200 ease-in-out hover:text-gray-300">Home</Link>
              </li>
              <li className="mr-6">
                <Link to="/component/About" className="text-white transition duration-200 ease-in-out hover:text-gray-300">About</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/component/Home" element={<Home />} />
          <Route path="/component/About" element={<About />} />
        </Routes>
        <div className="flex-grow"></div> 
        <footer className="py-4 text-center text-white bg-blue-800">
          <div className="container mx-auto"> 
            <p className="text-sm">&copy; 2024 latihan-web</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
