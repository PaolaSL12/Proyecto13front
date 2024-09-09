import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Servicios from "./pages/Servicios/Servicios";
import TusCitas from "./pages/TusCitas/TusCitas";
import Appointment from "./pages/Appointment/Appointment";
import Calendario from "./pages/Calendario/Calendario";
import { AppProvider } from "./utils/Context/Context";

const App = () => {
  return (
    <AppProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Servicios />} />
        <Route path="/appointment/:id" element={<Appointment />} />
        <Route path="/citas" element={<TusCitas />} />
        <Route path="/calendario" element={<Calendario />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
