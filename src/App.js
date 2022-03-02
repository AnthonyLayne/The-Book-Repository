import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// Components
import Homepage from "./pages/Homepage";

// Local
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>The Book Repository</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/catalogue">Catalogue</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route class="home" exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<div>asdf</div>} />
        <Route exact path="/catalogue" element={<div>asdf</div>} />
      </Routes>
    </div>
  );
}

export default App;
