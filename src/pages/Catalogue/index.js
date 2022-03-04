import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./index.css";

const Catalogue = ({ setSelectedBook }) => {
  const navigate = useNavigate();

  const handleExample = () => {
    setSelectedBook("Example 1");
    navigate("/checkout");
  };

  // useEffect(() => {
  //   if (!isLoggedIn) navigate("/sign-in");
  // }, [isLoggedIn]);

  return (
    <div className="container">
      <button onClick={handleExample}>
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
          alt="Logo"
        />
      </button>
      <button>
        <img
          src="https://images.unsplash.com/photo-1495640452828-3df6795cf69b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Logo"
        />
        <Link to="/checkout" onClick={() => setSelectedBook("Example 2")}>
          Purchase
        </Link>
      </button>
      <button>
        <img
          src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Logo"
        />
        <Link to="/checkout">Purchase</Link>
      </button>
      <button>
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
          alt="Logo"
        />
        <Link to="/checkout">Purchase</Link>
      </button>
      <button>
        <img
          src="https://images.unsplash.com/photo-1495640452828-3df6795cf69b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Logo"
        />
        <Link to="/checkout">Purchase</Link>
      </button>
      <button>
        <img
          src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Logo"
        />
        <Link to="/checkout">Purchase</Link>
      </button>
    </div>
  );
};

export default Catalogue;
