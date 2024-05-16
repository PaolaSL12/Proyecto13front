import { deleteAppointment } from "../../utils/Fetch/deleteAppointment";
import "./AppointmentCard.css"


const AppointmentCard = ({appointments, setAppointments}) => {
  return (
    <>
    {appointments.length === 0 ? (
        <p className="notDates">No tiene ninguna cita agendada.</p>
      ) : (
        appointments
          .sort((a, b) => {
            if (a.date < b.date) return -1;
            if (a.date > b.date) return 1;
            if (a.startTime < b.startTime) return -1;
            if (a.startTime > b.startTime) return 1;

            return 0;
          })
          .map((appointment) => (
            <div key={appointment._id} className="appointment">
              <h2>{appointment.service.name}</h2>
              <p>Estilista: {appointment.stylist.name}</p>
              <p>Fecha: {appointment.date}</p>
              <p>
                Hora: {appointment.startTime} / {appointment.endTime}
              </p>
              <button onClick={() => deleteAppointment(appointment._id, setAppointments)}>
                Eliminar Cita
              </button>
            </div>
          ))
      )}
    </>
  )
}

export default AppointmentCard