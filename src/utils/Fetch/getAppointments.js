import { API } from "../../utils/Services/API";

export const getAppointments = async (formatDate, selectedDate, setErrorMessage, setAppointments) => {
    try {
        const res = await API({ endpoint: `appointment/${formatDate(selectedDate)}` });
        const response = await res.json();
        if (response.message) {
          setErrorMessage(response.message);
          return
        }
          setAppointments(response);
          setErrorMessage('');
    } catch (error) {
      console.error(error);
      console.error("Error fetching services:", error);
    }
  }