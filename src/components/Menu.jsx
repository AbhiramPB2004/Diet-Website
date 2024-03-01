import { useState } from "react";
import logo from "../img/logo.png";

export default function Menu() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <>
      <div className={`menu ${menuActive ? "active" : ""}`}>
        <div className="container flex">
          <div className="mobile-btn" onClick={toggleMenu}>
            <ion-icon name="grid"></ion-icon>
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <ul className="nav">
            <li className="nav-item">
              <a href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a href="#why-us">Features</a>
            </li>
            <li className="nav-item">
              <a href="#explore">Explore</a>
            </li>
            <li className="nav-item">
              <a href="#discount">Register</a>
            </li>
          </ul>

          <a href="#" className="btn" style={{ marginLeft: "350px" }}>
            Register
          </a>
          <a href="http://localhost:5173/login" className="btn" style={{ marginLeft: "10px" }}>
            Login
          </a>
        </div>
      </div>
    </>
  );
}
