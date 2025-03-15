import axios from "axios";
import { END_POINTS } from "../../constants/urls";

export const fetchGroceryItemByIdService = async (id) => {
    try {
        const response = await axios.get(END_POINTS.ADMIN.GET_PRODUCT_BY_ID(id));
        return response.data.data;
    } catch (error) {
        console.error("Error fetching grocery item by ID:", error);
        throw error;
    }
};
