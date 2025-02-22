import React, { useState } from 'react';
import { handleCartCounter } from '../../utils/cartUtils'; // Import function

const About = () => {
    const [cartCounter, setCartCounter] = useState(0);

    return (
        <>
            <div>this is About page</div>
            <p>{cartCounter}</p>
            <h2>counter k neeche wali line</h2>
            <button
                className='bg-blue-400 text-neutral-50'
                onClick={() => handleCartCounter(cartCounter, setCartCounter)}
            >
                add to cart
            </button>
        </>
    );
};

export default About;
