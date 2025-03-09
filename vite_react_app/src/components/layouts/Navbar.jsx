import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const { pathname } = useLocation();
    console.log("Current Path:", pathname);

    const [cartCounter, setCartCounter] = useState(0);
    const counter = useSelector((state) => state.counter.value);

    return (
        <nav className="bg-red-500 p-4 shadow-md">
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
                            className={`px-4 py-2 rounded-md transition ${pathname === item.path ? "bg-white text-red-500 font-bold" : "text-white hover:bg-red-600"
                                }`}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
                {/* Display Counters */}
                <p className="text-white font-semibold">Cart: {cartCounter}</p>
                <p className="text-white font-semibold">Counter: {counter}</p>
            </ul>
        </nav>
    );
};

export default Navbar;
