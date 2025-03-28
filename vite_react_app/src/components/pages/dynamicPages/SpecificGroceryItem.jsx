import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchGroceryItemByIdService } from "../../../services/productServices/fetchGroceryItemByIdService";
import { deleteGroceryItemService } from "../../../services/productServices/deleteGroceryItemService";

const SpecificGroceryItem = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [dataItem, setDataItem] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    // Fetch Specific Grocery Item by ID
    useEffect(() => {
        const fetchSpecificItem = async () => {
            try {
                const data = await fetchGroceryItemByIdService(id);
                setDataItem(data);
            } catch (err) {
                setError("Failed to fetch the grocery item.");
            } finally {
                setLoading(false);
            }
        };
        fetchSpecificItem();
    }, [id]);

    // Delete Item and Navigate Back
    const handleDelete = async () => {
        try {
            await deleteGroceryItemService(id);
            navigate("/all-grocery-items"); // Redirect to grocery list after deletion
        } catch (error) {
            setError("Failed to delete item.");
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            {loading ? (
                <p className="text-center text-gray-500">Loading...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : (
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-800">{dataItem.title}</h2>
                    <p className="text-gray-600">{dataItem.description}</p>

                    <div className="flex flex-col space-y-2 bg-gray-100 p-4 rounded-lg">
                        <p className="text-gray-700 font-medium">Quantity: <span className="font-bold">{dataItem.quantity}</span></p>
                        <p className="text-green-600 font-semibold text-lg">Price: <span>${dataItem.price}</span></p>
                        <p className="text-gray-500">Discount: <span className="text-red-500 font-medium">{dataItem.discount}</span></p>
                    </div>

                    <div className="flex justify-between mt-4">
                        <button className="w-1/3 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                            Add to Cart
                        </button>
                        <button onClick={() => navigate(-1)} className="w-1/3 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition">
                            Go Back
                        </button>
                        <button onClick={handleDelete} className="w-1/3 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">
                            Delete Item
                        </button>
                    </div>
                    <Link to={`/update-product/${id}`}>
                        <button className="w-1/3 bg-orange-700 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
                            Edit Item
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default SpecificGroceryItem;
