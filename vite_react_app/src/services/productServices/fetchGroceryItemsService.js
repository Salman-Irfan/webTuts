import axios from "axios";
import { END_POINTS } from "../../constants/urls";


export const fetchAllGroceryItemsService = async () => {
    try {
        const response = await axios.get(END_POINTS.ADMIN.GET_ALL_GROCERY_ITEMS);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching grocery items:", error);
        throw error;
    }
};
