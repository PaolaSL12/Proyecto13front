import { API } from "../../utils/Services/API";

const submitRegister = async (
  formData,
  setIsLogged,
  reset,
  navigate,
  setMessage,
  setMessageType
) => {
  try {
    const res = await API({
      method: "POST",
      body: {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      },
      endpoint: "user/register",
    });
    const response = await res.json();

    if (res.status === 420) {
      setMessage("Nombre de usuario ya existente ❌");
      setMessageType("error");
      return;
    }

    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));
    setIsLogged(true);

    setMessage("Se ha registrado correctamente 💅💁‍♀️");
    setMessageType("success");
    
    setTimeout(() => {
      navigate("/");
    }, 3000);

  } catch (error) {
    console.error("Error fetching:", error);
  }
};

export default submitRegister;
