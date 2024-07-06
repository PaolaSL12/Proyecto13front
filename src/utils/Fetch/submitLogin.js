
import { API } from "../../utils/Services/API";

const submitLogin = async (formData, setIsLogged, reset, navigate) => {
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
      alert("Nombre de usuario o contraseña incorrecto❌");
      reset();
      return;
    }

    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));
    setIsLogged(true);

    navigate("/");
  } catch (error) {
    console.error("Error fetching:", error);
  }
};

export default submitLogin;