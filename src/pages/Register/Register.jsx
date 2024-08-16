import { useForm } from "react-hook-form";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import FormName from "../../components/FormName/FormName";
import FormPassword from "../../components/FormPassword/FormPassword";
import FormEmail from "../../components/FormEmail/FormEmail";
import submitRegister from "../../utils/Fetch/submitRegister";
import Message from "../../components/Message/Message";
import { useState } from "react";


const Register = ({ isLogged, setIsLogged }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const submit = (formData) => {
    submitRegister(formData, setIsLogged, reset, navigate,
      setMessage,
      setMessageType); 
  };

  
  const clearMessage = () => {
    setMessage("");
    setMessageType("");
  };

  return (
    <div className="register">
       <Message
        message={message}
        type={messageType}
        clearMessage={clearMessage}
      />
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
