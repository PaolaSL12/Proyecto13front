import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Servicios from "./pages/Servicios/Servicios";
import { useEffect, useState } from "react";
import TusCitas from "./pages/TusCitas/TusCitas";
import Appointment from "./pages/Appointment/Appointment";
import { API } from "./utils/Services/API";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await API({ endpoint: "service" });
        const response = await res.json();
        setServices(response);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      <Header isLogged={isLogged} setIsLogged={setIsLogged} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />}
        />
        <Route
          path="/register"
          element={<Register isLogged={isLogged} setIsLogged={setIsLogged} />}
        />
        <Route path="/services" element={<Servicios services={services} />} />
        <Route
          path="/appointment/:id"
          element={<Appointment services={services} />}
        />
        <Route path="/citas" element={<TusCitas />} />
      </Routes>
    </>
  );
};

export default App;