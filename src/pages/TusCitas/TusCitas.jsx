import { useEffect, useState } from "react";
import "./TusCitas.css";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import { fetchServices } from "../../utils/Fetch/fetchServices";

const TusCitas = () => {
  const [appointments, setAppointments] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!dataLoaded) {
      const loadAppointments = async () => {
        setLoading(true);
        await fetchServices(setAppointments, setDataLoaded);
        setLoading(false);
      };

      loadAppointments();
    }
  }, [dataLoaded]);
  return (
    <div className="tusCitas">
      {loading ? (
        <div className="loading">
          <img src="/assets/cargando.gif" alt="cargando..." /> 
        </div>
      ) : (
        <AppointmentCard appointments={appointments} setAppointments={setAppointments} />
      )}
    </div>
  );
};

export default TusCitas;