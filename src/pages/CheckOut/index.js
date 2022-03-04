import React, { useState } from "react";

import "./index.css";

const newCustomer = {
  first: "",
  last: "",
  hard: false,
  soft: false,
  email: "",
  notification: false,
};

const CheckOut = ({ selectedBook }) => {
  const [bookVersionState, setBookVersionState] = useState("hard"); // "hard" | "soft"

  const [inputsState, setInputsState] = useState({ firstName: "", lastName: "" });
  const handleOnChange = (e) =>
    setInputsState((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const [checkBoxState, setCheckBoxState] = useState(false);
  const handleCheckClick = (e) => setCheckBoxState((prev) => !prev);

  return (
    <>
      <h1>{selectedBook}</h1>
      <article className="checkoutForm">
        <label>
          Hard Cover
          <input
            type="radio"
            checked={bookVersionState === "hard"}
            onClick={() => setBookVersionState("hard")}
          />
        </label>
        <label>
          Soft Cover
          <input
            type="radio"
            checked={bookVersionState === "soft"}
            onClick={() => setBookVersionState("soft")}
          />
        </label>
        <div>
          Number of Copies:
          <input type="number" />
        </div>

        <div>
          <input
            placeholder="First Name"
            name="firstName"
            type="text"
            value={inputsState.firstName}
            onChange={handleOnChange}
          />
          <input
            placeholder="Last Name"
            name="lastName"
            type="text"
            value={inputsState.lastName}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <input type="email" placeholder="Enter your Email" name="email" />
          <p>
            Would you like to receive email notifications about your order?
            <label>
              <input
                type="checkbox"
                name="notification"
                onClick={handleCheckClick}
                checked={checkBoxState}
              />
            </label>
          </p>
          {/* <button onClick={}>Place Order</button> */}
        </div>
      </article>
    </>
  );
};

export default CheckOut;
