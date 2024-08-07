import { useForm } from "react-hook-form";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import FormName from "../../components/FormName/FormName";
import FormPassword from "../../components/FormPassword/FormPassword";
import submitLogin from "../../utils/Fetch/submitLogin";


const Login = ({ isLogged, setIsLogged }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const submit = (formData) => {
    submitLogin(formData, setIsLogged, reset, navigate); 
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit(submit)}>
        <FormName register={register} errors={errors} />
        <FormPassword register={register} errors={errors} isPatternRequired={false}/>
        <button>Login</button>
        <p className="loginMessage">¿No tienes una cuenta? <Link to="/register" className="registerMessage">Regístrate aquí</Link></p>
      </form>
    </div>
  );
};

export default Login;
