import { API } from "../../utils/Services/API";

const submitRegister = async (formData, setIsLogged, reset, navigate) => {
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
      alert("Nombre de usuario ya existente ❌");
      reset();
      return;
    }

    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));
    setIsLogged(true);
    alert("Se ha registrado correctamente 💅💁‍♀️");

    navigate("/");
  } catch (error) {
    console.error("Error fetching:", error);
  }
};

export default submitRegister;