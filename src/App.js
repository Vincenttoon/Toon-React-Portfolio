import React, { useState } from "react";
import Header from "../src/components/Header";
import About from "./components/About";
import Contact from "../src/components/Contact";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Footer from "../src/components/Footer";
import './App.css';

function App() {
const [currentTab, handleTabChange] = useState('about');

const displayTab = () => {
  if (currentTab === 'About') {
    return <About />
  }
  if (currentTab === 'Portfolio') {
    return <Portfolio />
  }
  if (currentTab === 'Resume') {
    return <Resume />
  }
  if (currentTab === 'Contact') {
    return <Contact />
  }
  return <About />
}

  return (
    <div className="App">
      <Header currentTab={currentTab}
      handleTabChange={handleTabChange}
      ></Header>
      <main>{displayTab()}</main>
      <Footer />
    </div>
  );
}

export default App;
