import axios from "axios";
import { END_POINTS } from "../../constants/urls";

export const updateProductByIdService = async (id, productData) => {
    try {
        const response = await axios.put(END_POINTS.ADMIN.UPDATE_PRODUCT(id), productData);
        return response.data;
    } catch (error) {
        console.error("Error updating product by ID:", error);
        throw error;
    }
};
