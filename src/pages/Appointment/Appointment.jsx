import { useForm } from "react-hook-form";
import "./Appointment.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FormDate from "../../components/FormDate/FormDate";
import FormTime from "../../components/FormTime/FormTime";
import FormService from "../../components/FormService/FormService";
import FormStylists from "../../components/FormStylists/FormStylists";
import fetchStylist from "../../components/Fetch/fetchStylist";
import submitAppointment from "../../components/Fetch/submitAppointment";

const Appointment = ({ services }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const { id } = useParams();
  const [stylists, setStylists] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchStylist(setStylists); 
  }, []);

  const submit = (formData) => {
    submitAppointment(formData, user, navigate, reset); 
  };

  return (
    <div className="appointmentForm">
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
