import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateProductByIdService } from "../../../services/productServices/updateProductByIdService";
import { fetchSpecificProductEffect } from "../../../services/productServices/displayEffect/fetchSpecificProductEffect";

const UpdateProductById = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        quantity: "",
        price: "",
        discount: "",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Use effect only calls the function
    useEffect(() => {
        fetchSpecificProductEffect(id, setFormData, setError, setLoading);
    }, [id]);

    // Handle form change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProductByIdService(id, formData);
            alert("Product updated successfully!");
            navigate("/all-grocery-items");
        } catch (error) {
            alert("Failed to update product.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold text-center mb-4">
                    Update Grocery Item
                </h2>

                {loading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="p-2 border rounded"
                            placeholder="Item Name"
                        />
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className="p-2 border rounded"
                            placeholder="Description"
                        />
                        <input
                            type="text"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            required
                            className="p-2 border rounded"
                            placeholder="Quantity"
                        />
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            className="p-2 border rounded"
                            placeholder="Price"
                        />
                        <input
                            type="number"
                            name="discount"
                            value={formData.discount}
                            onChange={handleChange}
                            className="p-2 border rounded"
                            placeholder="Discount"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                        >
                            Update Item
                        </button>
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition"
                        >
                            Cancel
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default UpdateProductById;
