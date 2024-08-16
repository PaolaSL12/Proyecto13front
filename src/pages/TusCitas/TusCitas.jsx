import { useEffect, useState } from "react";
import "./TusCitas.css";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import { fetchServices } from "../../utils/Fetch/fetchServices";
import Message from "../../components/Message/Message";

const TusCitas = () => {
  const [appointments, setAppointments] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

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

  const clearMessage = () => {
    setMessage("");
    setMessageType("");
  };

  return (
    <div className="tusCitas">
      <Message message={message} type={messageType} clearMessage={clearMessage} />
      {loading ? (
        <div className="loading">
          <img src="/assets/cargando.gif" alt="cargando..." /> 
        </div>
      ) : (
        <AppointmentCard 
            appointments={appointments} 
            setAppointments={setAppointments} 
            setMessage={setMessage} 
            setMessageType={setMessageType} 
          /> 
      )}
    </div>
  );
};

export default TusCitas;