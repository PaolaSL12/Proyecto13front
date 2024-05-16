import { useForm } from "react-hook-form";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import FormName from "../../components/FormName/FormName";
import FormPassword from "../../components/FormPassword/FormPassword";
import FormEmail from "../../components/FormEmail/FormEmail";
import submitRegister from "../../utils/Fetch/submitRegister";


const Register = ({ isLogged, setIsLogged }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const submit = (formData) => {
    submitRegister(formData, setIsLogged, reset, navigate); 
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit(submit)}>
        <FormName register={register} errors={errors} />
        <FormEmail register={register} errors={errors}/>
        <FormPassword register={register} errors={errors} isPatternRequired={true} />
        <button>Registrar</button>
      </form>
    </div>
  );
};

export default Register;
