import { BASE_URL } from "../variables/variables";

export const API = async ({
    method = "GET",
    body = null,
    contentType = "application/json",
    endpoint,
}) => {
    const options = {
        method,
        headers: {
            "Content-Type": contentType,
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    };

    if (method === "POST") {

        if (body instanceof FormData) {
            options.body = body;
        } else {
 
            options.body = JSON.stringify(body);
 
            if (contentType !== "multipart/form-data") {
                options.headers["Content-Type"] = "application/json";
            }
        }
    }

    const res = await fetch(BASE_URL + endpoint, options);

    return res;
};