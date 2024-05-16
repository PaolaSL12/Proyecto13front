import { useEffect, useState } from "react";
import "./TusCitas.css";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import { fetchServices } from "../../utils/Fetch/fetchServices";

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
      <AppointmentCard appointments={appointments} setAppointments={setAppointments}/>
    </div>
  );
};

export default TusCitas;