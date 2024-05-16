import { API } from "../../utils/Services/API";

export const fetchServices = async (setAppointments, setDataLoaded) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const res = await API({ endpoint: `user/${user._id}` });
      const response = await res.json();
      setAppointments(response.appointments);
      setDataLoaded(true);
    }
  } catch (error) {
    console.error(error);
    console.error("Error fetching services:", error);
  }
};

