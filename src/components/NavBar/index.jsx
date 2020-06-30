import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const onClick = (event) => {
    event.preventDefault();
    if (event.target.value === "Blue") {
      document.documentElement.style.setProperty("--color", "rgb(39, 67, 117)");
      document.documentElement.style.setProperty("--color2", "rgba(17, 58, 243, 0.596)");
    }
    if (event.target.value === "Green") {
      document.documentElement.style.setProperty("--color", "#124734");
      document.documentElement.style.setProperty("--color2", "#58be30");
    }
    if (event.target.value === "Orange") {
      document.documentElement.style.setProperty("--color", "#FF6110");
      document.documentElement.style.setProperty(
        "--color2",
        "rgb(212, 173, 154)"
      );
    }
  };

  return (
    <header>
      <p class="cabecera">
        Commercial <br /> Company Tool
      </p>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              Markets showroom
            </NavLink>
          </li>
          <li>
            <NavLink to="/shares">Shares</NavLink>
          </li>
        </ul>
      </nav>
      <nav class="botonesContenedor">
        <ul class="botones">
          <li>
            <input
              class="botonAzul"
              id="colourBtn1"
              type="submit"
              onClick={onClick}
              value="Blue"
            />
          </li>
          <li>
            <input
              class="botonVerde"
              id="colourBtn2"
              type="submit"
              onClick={onClick}
              value="Green"
            />
          </li>
          <li>
            <input
              class="botonNaranja"
              id="colourBtn3"
              type="submit"
              onClick={onClick}
              value="Orange"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
