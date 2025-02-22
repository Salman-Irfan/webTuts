import React from 'react'

const DynamicTestimonials = (props) => {
    // console.log(props)
    // console.log(props.name)
    // console.log(props.message)
    // har jga props likna par rha hai, solution object destructuring
    const {name, message} = props
    return (
        <>
            <p>name</p>
            <p>{name}</p>
            <p>{message}</p>
            <div>DynamicTestimonials</div>
            <p>name</p>
        </>
    )
}

export default DynamicTestimonials