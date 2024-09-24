// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Content from './components/Content';
import Technology from './components/Technology';
import FAQs from './components/Faq';
import HowWeWork from './components/HowWeWork';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Content />
      <HowWeWork />
      <Technology />
      <FAQs />
    
     
    </div>
  );
}

export default App;
