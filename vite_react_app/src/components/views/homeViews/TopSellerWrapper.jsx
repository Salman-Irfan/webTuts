import React from 'react'

const TopSellerWrapper = (props) => {
    // console.log(props)
    // console.log(props.children)
    const {children} = props
    console.log(children)
    return (
        <>
            <div className='bg-blue-200'>Top Sellers</div>
            {children}
        </>
    )
}

export default TopSellerWrapper