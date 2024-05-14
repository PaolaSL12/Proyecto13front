import ImgWrapper from "../../components/ImgWrapper/ImgWrapper";
import "./Home.css";

const Home = () => {

  return (
    <div className="home">
      <div className="title">
        <h1>Tu espacio para desconectar y dejarte mimar por nosotras</h1>
        <p>
          Un espacio donde la prioridad sea el cuidao de las manos y los pies,
          que todas la personas que salgan se sientan guapas y felices
        </p>
      </div>
      <ImgWrapper
        c={"homeImg"}
        url={
          "https://res.cloudinary.com/daowiromv/image/upload/v1715364849/LaMussa/39f3a8a3-d9db-421c-ba3b-0ea2a8a62d3b_xkxvfp.jpg"
        }
        alt={"home"}
      />
    </div>
  );
};

export default Home;
