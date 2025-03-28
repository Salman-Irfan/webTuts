import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    console.log("Current Path:", pathname);

    // State to track authentication status
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
            localStorage.removeItem("user"); // Remove user info if no token
            navigate("/auth/login"); // Redirect to login page
        } else {
            setIsAuthenticated(true);
        }
    }, [navigate]);

    // Logout Handler
    const handleLogOut = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        navigate("/auth/login"); // Redirect to login
    };

    const [cartCounter, setCartCounter] = useState(0);
    const counter = useSelector((state) => state.counter.value);

    return (
        <nav className="bg-red-500 p-4 shadow-md flex justify-between items-center">
            {/* Left Side - Navigation Links */}
            <ul className="flex space-x-4">
                {[
                    { path: "/", label: "Home" },
                    { path: "/about", label: "About" },
                    { path: "/contact", label: "Contact" },
                    { path: "/use-effect-demo", label: "Use Effect Demo" },
                    { path: "/free-json-apis", label: "Free Json APIs" },
                    { path: "/add-grocery-item", label: "Add Grocery Item" },
                ].map((item) => (
                    <li key={item.path}>
                        <Link
                            to={item.path}
                            className={`px-4 py-2 rounded-md transition ${pathname === item.path
                                    ? "bg-white text-red-500 font-bold"
                                    : "text-white hover:bg-red-600"
                                }`}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Right Side - Counters and Authentication Buttons */}
            <div className="flex items-center space-x-4">
                {/* Display Counters */}
                <p className="text-white font-semibold">Cart: {cartCounter}</p>
                <p className="text-white font-semibold">Counter: {counter}</p>

                {/* Auth Buttons */}
                {isAuthenticated ? (
                    <button
                        onClick={handleLogOut}
                        className="px-4 py-2 bg-white text-red-500 font-semibold rounded-md hover:bg-red-100 transition"
                    >
                        Logout
                    </button>
                ) : (
                    <>
                        <Link
                            to="/auth/login"
                            className="px-4 py-2 bg-white text-red-500 font-semibold rounded-md hover:bg-red-100 transition"
                        >
                            Login
                        </Link>
                        <Link
                            to="/auth/signup"
                            className="px-4 py-2 bg-white text-red-500 font-semibold rounded-md hover:bg-red-100 transition"
                        >
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
