import axios from "axios";

export const loginService = async (formData) => {
    try {
        const response = await axios.post(
            "http://127.0.0.1:3000/api/v1/auth/login",
            formData // Send form data in the request body
        );
        return response.data; // Return the response data
    } catch (e) {
        console.log(e);
        throw new Error("Failed to login");
    }
};