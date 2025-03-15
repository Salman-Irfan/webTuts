import { fetchGroceryItemByIdService } from "../fetchGroceryItemByIdService"; // Adjust path based on your structure

export const fetchSpecificProductEffect = (id, setFormData, setError, setLoading) => {
    const fetchProduct = async () => {
        try {
            const data = await fetchGroceryItemByIdService(id);
            setFormData(data);
        } catch (err) {
            setError("Failed to fetch product details.");
        } finally {
            setLoading(false);
        }
    };

    fetchProduct();
};
