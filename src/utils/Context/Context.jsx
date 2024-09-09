import { createContext, useState, useEffect } from "react";
import { API } from "../Services/API";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
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

  const value = {
    isLogged,
    setIsLogged,
    isAdmin,
    setIsAdmin,
    services,
    loading
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
