import React from 'react'

const TopSellerCard = ({ title, price, discount }) => {
    return (
        <>
            <h1>{title}</h1>
            <h2>{price}</h2>
            <h3>{discount}</h3>
        </>
    )
}

export default TopSellerCard