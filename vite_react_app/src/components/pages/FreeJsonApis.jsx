import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SkeletonLoader from '../layouts/SkeletonLoader';

const FreeJsonApis = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchJsonApiData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            setData(response.data); // Store API response data
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); // Stop loading after API call completes
        }
    };

    useEffect(() => {
        fetchJsonApiData();
    }, []);

    return (
        <div>
            <h2>FreeJsonApis</h2>
            {loading ? ( // Ternary operator for conditional rendering
                <SkeletonLoader/>
            ) : error ? (
                <p style={{ color: 'red' }}>Error: {error}</p>
            ) : (
                <div>
                    <p><strong>Title:</strong> {data?.title}</p>
                    <p><strong>Completed:</strong> {data?.completed ? 'Yes' : 'No'}</p>
                </div>
            )}
        </div>
    );
};

export default FreeJsonApis;
