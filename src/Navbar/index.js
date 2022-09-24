import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Navbar({ setIsloggedIn, isLoggedIn }) {
  function RenderButton() {
    if (isLoggedIn == true) {
      return (
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => {
            localStorage.setItem("isLoggedIn", false);
            setIsloggedIn(JSON.parse(localStorage.getItem("isLoggedIn")));
          }}
        >
          {" "}
          Logout{" "}
        </button>
      );
    } else {
      return (
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => {
            localStorage.setItem("isLoggedIn", true);
            setIsloggedIn(JSON.parse(localStorage.getItem("isLoggedIn")));
          }}
        >
          {" "}
          Login{" "}
        </button>
      );
    }
  }

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.navItems}> Home </Link>
      <Link to="/products" className={styles.navItems}> Products </Link>
      <Link to="/about" className={styles.navItems}> About </Link>
      <Link to="/Cart" className={styles.navItems}>Cart</Link>
      <RenderButton />
    </header>
  );
}

export default Navbar;
