import React from "react";
import Title from "./Title";


function authenticateUser() {
  return false;
}

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />

      <div className="nav-items" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>

        {/* ✅ Place button next to the ul */}
        {authenticateUser() ? (
          <button
            onClick={() => {
              alert("Are you sure you want to logout?");
            }}
          >
            LogOut
          </button>
        ) : (
          <button
            onClick={() => {
              alert("Welcome home Shreyank!");
            }}
          >
            LogIn
          </button>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
