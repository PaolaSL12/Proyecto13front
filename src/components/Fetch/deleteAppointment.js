import { API } from "../../utils/Services/API";

export const deleteAppointment = async (appointmentId, setAppointments) => {
    try {
      const response = await API({
        method: "DELETE",
        endpoint: `appointment/${appointmentId}`,
      });
  
      if (response.ok) {
        alert("Cita eliminada");
        setAppointments((prevAppointments) =>
          prevAppointments.filter(
            (appointment) => appointment._id !== appointmentId
          )
        );
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.error("Error al eliminar la cita:", error);
    }
  };