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
import Calendario from "./pages/Calendario/Calendario";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true)
      try {
        const res = await API({ endpoint: "service" });
        const response = await res.json();
        setServices(response);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      <Header isLogged={isLogged} setIsLogged={setIsLogged} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
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
        <Route path="/services" element={<Servicios services={services}  loading={loading}/>} />
        <Route
          path="/appointment/:id"
          element={<Appointment services={services} />}
        />
        <Route path="/citas" element={<TusCitas />} />
        <Route path="/calendario" element={<Calendario/>} />
      </Routes>
    </>
  );
};

export default App;
