import React from "react";
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import Remote from "./remote work/Remote";
import Contact from "./contacts/Contact";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Works/>
      <Remote/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
