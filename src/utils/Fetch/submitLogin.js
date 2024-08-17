import { API } from "../../utils/Services/API";

const submitLogin = async (formData, setIsLogged, reset, navigate, setMessage, setMessageType) => {
  try {
    const res = await API({
      method: "POST",
      body: {
        name: formData.name,
        password: formData.password,
      },
      endpoint: "user/login",
    });
    const response = await res.json();

    if (res.status === 420) {
      setMessage("Nombre de usuario o contraseña incorrecto❌");
      setMessageType("error");

      setTimeout(() => {
        setMessage("");
      }, 2000);
      reset();
      return;
    }

    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));
    setIsLogged(true);

    setMessage("¡Inicio de sesión exitoso!✅");
    setMessageType("success");
    
    setTimeout(() => {
      navigate("/");
    }, 2000);
  
  } catch (error) {
    console.error("Error fetching:", error);
    setMessage("Error de red. Por favor, intenta nuevamente.");
    setMessageType("error");
  }
};

export default submitLogin;