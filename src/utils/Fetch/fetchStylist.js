import { API } from "../../utils/Services/API";

const fetchStylist = async (setStylists) => {
  try {
    const res = await API({ endpoint: "stylist" });
    const response = await res.json();
    setStylists(response);
  } catch (error) {
    console.error("Error fetching services:", error);
  }
};

export default fetchStylist;