import { API } from "../../utils/Services/API";
import moment from "moment";

const submitAppointment = async (formData, user, navigate, reset, setMessage, setMessageType) => {
  const formattedDate = moment(formData.date).format("DD/MM/YYYY");
  try {
    const res = await API({
      method: "POST",
      body: {
        date: formattedDate,
        startTime: formData.startTime,
        user: user._id,
        service: formData.service,
        stylist: formData.stylist,
      },
      endpoint: "appointment/post",
    });
    const response = await res.json();


    if (res.status === 420) {
      setMessage("El intervalo no esta disponible");
      setMessageType("error");
      reset();
      return;
    }
  
    setMessage("Cita creada con éxito 💁‍♀️💅 Puedes ver tus citas agendadas en el apartado de TUS CITAS.");
    setMessageType("success");
    
    setTimeout(() => {
      navigate("/");
    }, 3000);

  } catch (error) {
    console.error("Error fetching:", error);
  }
};

export default submitAppointment;