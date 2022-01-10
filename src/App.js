// import React, { useState } from "react";
// import Nav from "./components/navFile/Nav";
import { useContext } from "react";
import About from "./components/aboutFile/About";
import Contact from "./components/contactFile/Contact";
import Intro from "./components/introFile/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
    style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}
  >
      <main>
        <Toggle />
        <Intro />
        <About />
        <ProductList />
        <Contact />
      </main>
    </div>
  );
}

export default App;
