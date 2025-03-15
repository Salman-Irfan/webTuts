import axios from "axios";
import { END_POINTS } from "../../constants/urls";

export const deleteGroceryItemService = async (id) => {
    try {
        await axios.delete(END_POINTS.ADMIN.DELETE_PRODUCT(id));
    } catch (error) {
        console.error("Error deleting item:", error);
        throw error;
    }
};
