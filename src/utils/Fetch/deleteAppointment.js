import { API } from "../../utils/Services/API";


export const deleteAppointment = async (appointmentId, setAppointments, setMessage, setMessageType) => {
  try {
    const response = await API({
      method: "DELETE",
      endpoint: `appointment/${appointmentId}`,
    });

    if (response.ok) {
      setMessage("Cita eliminada con éxito.");
      setMessageType("success");
 
      setTimeout(() => {
        setAppointments((prevAppointments) =>
          prevAppointments.filter(
            (appointment) => appointment._id !== appointmentId
          )
        );
        setMessage(""); 
      }, 2000); 
    } else {
      const error = await response.json();
      setMessage(`Error: ${error.message}`);
      setMessageType("error");
    }
  } catch (error) {
    setMessage("Error al eliminar la cita.");
    setMessageType("error");
    console.error("Error al eliminar la cita:", error);
  }
};