import { useEffect, useState } from "react";
import "./TusCitas.css";
import { fetchServices } from "../../components/Fetch/fetchServices";
import { deleteAppointment } from "../../components/Fetch/deleteAppointment";

const TusCitas = () => {
  const [appointments, setAppointments] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (!dataLoaded) {
      fetchServices(setAppointments, setDataLoaded);
    }
  }, [dataLoaded]);

  return (
    <div className="tusCitas">
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
    </div>
  );
};

export default TusCitas;