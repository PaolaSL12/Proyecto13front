
import "./Servicios.css"
import ImgWrapper from "../../components/ImgWrapper/ImgWrapper"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { AppContext } from "../../utils/Context/Context";

const Servicios = () => {
  const navigate = useNavigate();

  const { services, loading } = useContext(AppContext);

  const handleAppointmentClick = (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      e.preventDefault(); 
      navigate("/login");
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