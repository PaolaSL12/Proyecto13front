import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import "./Calendario.css"
import { format } from 'date-fns';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import { getAppointments } from '../../utils/Fetch/getAppointments';
import Message from '../../components/Message/Message';

const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments ] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const formatDate = (date) => {
    return format(date, 'dd/MM/yyyy');
  };

  useEffect(()=> {
    setLoading(true); 
    getAppointments(formatDate, selectedDate, setErrorMessage, (data) => {
      setAppointments(data);
      setLoading(false); 
    });
  },[selectedDate]);

  const clearMessage = () => {
    setMessage("");
    setMessageType("");
  };

  return (
    <div className='calendario'>
      <Message message={message} type={messageType} clearMessage={clearMessage} />
      <h2>Calendario</h2>
      <Calendar className="calendar"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <p className='selected'>Fecha seleccionada: {formatDate(selectedDate)}</p>
      {loading ? (
        <p className="notDates">Cargando...</p>
      ) : (
        <>
            <div className='appointment-container'>
            <AppointmentCard 
            appointments={appointments} 
            setAppointments={setAppointments} 
            setMessage={setMessage} 
            setMessageType={setMessageType} 
          /> 
            </div>
        </>
      )}
    </div>
  );
};

export default Calendario;