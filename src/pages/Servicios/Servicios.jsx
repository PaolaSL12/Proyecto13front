
import "./Servicios.css"
import ImgWrapper from "../../components/ImgWrapper/ImgWrapper"

import { Link } from "react-router-dom"

const Servicios = ({services}) => {
  return (
    <div className="services">
      {services && services.map((service) => (
        <div key={service._id} className="service">
          <ImgWrapper c={"servicesImg"} url={service.img} alt={service.name}/>
          <h2>{service.name}</h2>
          <p>{service.description}</p>
          <Link
            to={{
              pathname: `/appointment/${service._id}`,
              state: { serviceData: service }
            }}
          >
            <button>Agendar una cita</button>
          </Link>
          
        </div>
      ))}
    </div>
  )
}

export default Servicios