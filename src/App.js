import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Catalogue from "./pages/Catalogue";
import CheckOut from "./pages/CheckOut";
import Header from "./components/Header";

// Local
import "./App.css";

// test git

function App() {
  const [selectedBook, setSelectedBook] = useState("");

  return (
    <div className="App">
      <Header />

      <div className="app-wrapper">
        <Routes>
          <Route className="home" exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/catalogue"
            element={<Catalogue setSelectedBook={setSelectedBook} />}
          />
          <Route exact path="/checkout" element={<CheckOut selectedBook={selectedBook} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
