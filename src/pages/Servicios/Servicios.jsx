
import "./Servicios.css"
import ImgWrapper from "../../components/ImgWrapper/ImgWrapper"
import { Link } from "react-router-dom"

const Servicios = ({services, loading}) => {

  const handleAppointmentClick = (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      e.preventDefault(); 
      alert("Por favor, inicia sesión o regístrate para poder agendar una cita.");
     ;
    }
  };
  
  return (
    <div className="services">
       {loading ? (
        <div className="loading">
          <img src="/assets/cargando.gif" alt="cargando..." />
        </div>
      ) : (
        services && services.map((service) => (
        <div key={service._id} className="service">
          <ImgWrapper c={"servicesImg"} url={service.img} alt={service.name}/>
          <h2>{service.name}</h2>
          <p>{service.description}</p>
          <Link to={`/appointment/${service._id}`}>
              <button onClick={(e) => handleAppointmentClick(e)}>
                Agendar una cita
              </button>
            </Link>
        </div>
      ))
      )}
    </div>
  )
}

export default Servicios