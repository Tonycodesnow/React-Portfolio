// import React, { useState } from "react";
// import Nav from "./components/navFile/Nav";
import Intro from "./components/introFile/Intro";
import About from "./components/aboutFile/About";
import ProductList from "./components/productList/ProductList";

function App() {
  // const [categories] = useState([
  //   {
  //     name: "About Me",
  //     description: "a simple about me page",
  //   },
  //   { name: "Gallery", description: "Enjoy a gallery of my work" },
  //   { name: "Contact Me", description: "Reach me" },
  // ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      {/* <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav> */}

      <main>
        <Intro />
        <About />
        <ProductList />
      </main>
    </div>
  );
}

export default App;
