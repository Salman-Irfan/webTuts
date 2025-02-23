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
                    <p>{cartCounter}</p>
                    <p>{counter}</p>
                </ul>
            </nav>
        </>
    )
}

export default Navbar