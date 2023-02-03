import React, { useState } from "react";
import Header from "../src/components/Header";
import AboutPage from "./components/AboutPage";
import Contact from "../src/components/Contact";
import Portfolio from "../src/pages/Portfolio";
import Technologies from "../src/pages/Technologies";
import Footer from "../src/components/Footer";
import './App.css';

function App() {
const [currentTab, handleTabChange] = useState('about');

// if statement to return current tab and display that pages information
const displayTab = () => {
  if (currentTab === 'About') {
    return <AboutPage />
  }
  if (currentTab === 'Portfolio') {
    return <Portfolio />
  }
  if (currentTab === 'Technologies') {
    return <Technologies />
  }
  if (currentTab === 'Contact') {
    return <Contact />
  }
  return <AboutPage />
}

  return (
    <div className="App">
      <Header currentTab={currentTab}
      handleTabChange={handleTabChange}
      ></Header>
      {/* calling display tab to render correct page */}
      <main>{displayTab()}</main>
      <Footer />
    </div>
  );
}

export default App;
