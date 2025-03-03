import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [cartCounter, setCartCounter] = useState(0);
    const counter = useSelector((state) => state.counter.value)
    return (
        <>
            <nav className='bg-red-500 flex flex-row'>
                <ul className=''>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/use-effect-demo">Use Effect Demo</Link></li>
                    <li><Link to="/free-json-apis">Free Json APIs</Link></li>
                    <li><Link to="/add-grocery-item">Add Grocery Item</Link></li>
                    <p>{cartCounter}</p>
                    <p>{counter}</p>
                </ul>
            </nav>
        </>
    )
}

export default Navbar