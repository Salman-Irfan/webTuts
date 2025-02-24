import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [third, setThird] = useState(0)


    useEffect(() => {
        console.log(`component did mount`)
    },[first,third])

    const handleCount1 = () => {
        setFirst(first+1)
    }
    
    const handleCount2 = () => {
        setSecond(second+1)
    }
    
    const handleCount3 = () => {
        setThird(third+1)
    }


    return (
        <>
            <div>
                <button onClick={handleCount1} className='bg-green-300 text-green-700'>Button 1 </button>
                <button onClick={handleCount2} className='bg-red-300 text-red-700'>Button 2</button>
                <button onClick={handleCount3} className='bg-zinc-300 text-zinc-700'>Button 3</button>
            </div>
            <div>
                <p>Counter 1: {first} </p>
                <p>Counter 2: {second} </p>
                <p>Counter 3: {third} </p>
            </div>

            <div>UseEffectDemo</div>
        </>
    )
}

export default UseEffectDemo