import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllGroceryItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch grocery items from API
    const fetchAllGroceryItems = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:3000/api/v1/admin/all-grocery-items");
            setItems(response.data.data); // Store API data in state
        } catch (err) {
            setError("Failed to fetch grocery items.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllGroceryItems();
    }, []);

    // Delete Item and Update UI
    const handleItemDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:3000/api/v1/admin/delete-product/${id}`);
            setItems((prevItems) => prevItems.filter((item) => item._id !== id)); // Update state
        } catch (error) {
            console.error("Error deleting item:", error);
            setError("Failed to delete item.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-4">All Grocery Items</h2>

            {/* Loading and Error States */}
            {loading ? (
                <p className="text-center text-gray-500">Loading...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : (
                <div className="grid md:grid-cols-2 gap-4">
                    {items.map((item) => (
                        <div key={item._id} className="bg-white p-5 rounded-lg shadow-md border hover:shadow-lg transition">
                            <Link to={`/product/${item._id}`}>
                                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                                <p className="text-gray-600">
                                    Description: {item.description.length > 10 ? (
                                        <>
                                            {item.description.slice(0, 10)}...{" "}
                                            <span className="text-blue-400 hover:text-blue-700">Read more</span>
                                        </>
                                    ) : (
                                        item.description
                                    )}
                                </p>
                                <p className="text-gray-700 font-medium">
                                    Price: <span className="text-green-600">${item.price}</span>
                                </p>
                                <p className="text-gray-500">Discount: {item.discount}</p>
                            </Link>

                            {/* Improved Delete Button */}
                            <button
                                className="bg-red-500 text-white w-full py-2 px-4 rounded-lg mt-3 hover:bg-red-600 transition"
                                onClick={() => handleItemDelete(item._id)}
                            >
                                Delete Item
                            </button>
                            <Link to={`/update-product/${item._id}`}>

                                <button
                                    className="bg-green-500 text-white w-full py-2 px-4 rounded-lg mt-3 hover:bg-green-600 transition hover:cursor-pointer"
                                >
                                    Edit
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllGroceryItems;
