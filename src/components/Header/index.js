import { Link } from "react-router-dom";

import "./index.css";

const Header = () => (
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
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
