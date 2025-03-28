import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
            navigate("/auth/login"); // Redirect to login if not authenticated
        }
    }, [navigate]);

    return <div>Dashboard</div>;
};

export default Dashboard;
