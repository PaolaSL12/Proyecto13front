import "./Header.css";
import { NavLink } from "react-router-dom";
import ImgWrapper from "../ImgWrapper/ImgWrapper";
import { useState } from "react";

const Header = ({ isLogged, setIsLogged }) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsLogged(!isLogged)
  };

  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const isLoggedIn = user && token;

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
        <ImgWrapper
          c={"logo"}
          url={
            "https://res.cloudinary.com/daowiromv/image/upload/v1715366883/LaMussa/LaMussa_web-29_xlhdkg.png"
          }
          alt={"logo"}
        />
      <div className="toggle" onClick={toggleMenu}>
        <ImgWrapper
          c={"toggleImg"}
          url={"/assets/menu.png"}
          alt={"toggle-button"}
        />
      </div>

      <ul className={`menu ${isMenuOpen ? "open" : ""}`} onClick={closeMenu}>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/services">SERVICIOS</NavLink>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <NavLink to="/citas">TU CITAS</NavLink>
            </li>
            <li>
              <a  onClick={handleLogout} style={{cursor: "pointer"}}>
                CERRAR SESION
              </a>
            </li>
          </>
        ) : (
          <><li>
          <NavLink to="/register">REGISTRATE</NavLink>
        </li>
          <li>
            <NavLink to="/login">INICIA SESION</NavLink>
          </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
