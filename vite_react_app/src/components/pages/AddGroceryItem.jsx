import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { END_POINTS } from "../../constants/urls";
import { addGroceryItemService } from "../../services/productServices/addGroceryItemService";


const AddGroceryItem = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        quantity: "",
        discount: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting Form Data:", formData);

        try {
            await addGroceryItemService(formData);
            alert("Grocery item added successfully!");
        } catch (error) {
            console.error("Error adding grocery item:", error);
            alert("Failed to add item! Check console for errors.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-xl font-semibold text-center mb-4">
                    Add Grocery Item
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        type="text"
                        name="title"
                        placeholder="Item Name"
                        onChange={handleChange}
                        required
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description Name"
                        onChange={handleChange}
                        required
                        className="p-2 border rounded"
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        onChange={handleChange}
                        required
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="quantity"
                        placeholder="Quantity"
                        onChange={handleChange}
                        required
                        className="p-2 border rounded"
                    />
                    <input
                        type="number"
                        name="discount"
                        placeholder="Discount"
                        onChange={handleChange}
                        className="p-2 border rounded"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                    >
                        Add Item
                    </button>
                </form>
            </div>
            <Link to={`/all-grocery-items`}> All Grocery Items </Link>
        </div>
    );
};

export default AddGroceryItem;
