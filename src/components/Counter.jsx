import { useState, useEffect } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(1)
    const handleSumar = () => setCounter(counter + 1)
    const handleRestar = () => {
        if (counter > 1) setCounter(counter - 1)
    }

    useEffect(() => {
        console.log('se ejecuto el efecto')

        return () => {
            console.log('se desmonto')
        }
    }, [counter])

    return (
        <div className='flex flex-col w-75 items-center gap-4'>
            <p className='text-center text-2xl font-bold'>{counter}</p>
            
            <div className='flex gap-3'>
                <button 
                    onClick={handleSumar} 
                    className='bg-gray-500 text-white px-8 rounded-lg hover:bg-green-600 transition'
                >
                    sumar
                </button>
                <button 
                    onClick={handleRestar} 
                    className='bg-red-500 text-white px-8 py-2 rounded-lg hover:bg-red-600 transition'
                >
                    restar
                </button>
                <button className='bg-white text-black px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition shadow-sm'>
                    agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default Counter

//