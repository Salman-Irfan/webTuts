import axios from "axios";
import { END_POINTS } from "../../constants/urls";

export const addGroceryItemService = async (formData) => {
    try {
        const response = await axios.post(END_POINTS.ADMIN.ADD_GROCERY_ITEM, formData);
        return response.data;
    } catch (error) {
        console.error("Error adding grocery item:", error);
        throw error;
    }
};
