import { useForm } from "react-hook-form";
import "./Appointment.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import FormDate from "../../components/FormDate/FormDate";
import FormTime from "../../components/FormTime/FormTime";
import FormService from "../../components/FormService/FormService";
import FormStylists from "../../components/FormStylists/FormStylists";
import fetchStylist from "../../utils/Fetch/fetchStylist";
import submitAppointment from "../../utils/Fetch/submitAppointment";
import Message from "../../components/Message/Message";
import { AppContext } from "../../utils/Context/Context";


const Appointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const { id } = useParams();
  const [stylists, setStylists] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const { services } = useContext(AppContext);

  useEffect(() => {
    fetchStylist(setStylists); 
  }, []);

  const submit = (formData) => {
    submitAppointment(formData, user, navigate, reset, setMessage,
      setMessageType); 
  };

  const clearMessage = () => {
    setMessage("");
    setMessageType("");
  };


  return (
    <div className="appointmentForm">
       <Message
        message={message}
        type={messageType}
        clearMessage={clearMessage}
      />
      <h2>Agenda tu cita</h2>
      <form onSubmit={handleSubmit(submit)}>
        <FormDate register={register} errors={errors} />
        <FormTime register={register} errors={errors} />
        <FormService
          register={register}
          errors={errors}
          id={id}
          services={services}
        />
        <FormStylists register={register} errors={errors} stylists={stylists} />
        <button>Agendar Cita</button>
      </form>
    </div>
  );
};

export default Appointment;
