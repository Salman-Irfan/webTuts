import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [cartCounter, setCartCounter] = useState(0);
    return (
        <>
            <nav className='bg-red-500 flex flex-row'>
                <ul className=''>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <p>{cartCounter}</p>
                </ul>
            </nav>
        </>
    )
}

export default Navbar