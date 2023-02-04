import React, { useState } from "react";
import Header from "../src/components/Header";
import Home from "./pages/Home";
import Contact from "../src/components/Contact";
import Portfolio from "../src/pages/Portfolio";
import Technologies from "../src/pages/Technologies";
import FooterComponent from "../src/components/Footer";

function App() {
const [currentTab, handleTabChange] = useState('about');

// if statement to return current tab and display that pages information
const displayTab = () => {
  if (currentTab === 'About') {
    return <Home />
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
  return <Home />
}

  return (
    <div className="App">
      <Header currentTab={currentTab}
      handleTabChange={handleTabChange}
      ></Header>
      {/* calling display tab to render correct page */}
      <main>{displayTab()}</main>
      <FooterComponent />
    </div>
  );
}

export default App;
