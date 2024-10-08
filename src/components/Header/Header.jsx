import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import ImgWrapper from "../ImgWrapper/ImgWrapper";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../utils/Context/Context";

const Header = () => {

  const { isLogged, setIsLogged, isAdmin, setIsAdmin } = useContext(AppContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setIsLogged(false);
    setIsAdmin(false);
  };

  const [user, setUser] = useState();
  const [token, setToken] = useState();

  const isLoggedIn = user && token;

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    setToken(localStorage.getItem("token"));

    if (storedUser && storedUser.rol === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [isLogged]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
    <Link to="/">
      <ImgWrapper
        c={"logo"}
        url={
          "/assets/logo.png"
        }
        alt={"logo"}
      />
      </Link>
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
            {!isAdmin && (
              <li>
                <NavLink to="/citas">TUS CITAS</NavLink>
              </li>
            )}
            {isAdmin && (
              <li>
                <NavLink to="/calendario">CALENDARIO</NavLink>
              </li>
            )}
            <li>
            <Link to="/" onClick={handleLogout} style={{ cursor: "pointer" }}>
                CERRAR SESION
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
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
