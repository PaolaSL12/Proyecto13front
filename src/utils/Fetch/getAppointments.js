import { API } from "../../utils/Services/API";

export const getAppointments = async (formatDate, selectedDate, setErrorMessage, setAppointments) => {
  try {
    const res = await API({ endpoint: `appointment/${formatDate(selectedDate)}` });
    const response = await res.json();
    if (response.message) {
      setAppointments([]);
    } else {
      setAppointments(response);
    }
  } catch (error) {
    console.error("Error fetching appointments:", error);
    setErrorMessage('Error al cargar las citas. Por favor, inténtalo de nuevo.');
    setAppointments([]);
  }
};