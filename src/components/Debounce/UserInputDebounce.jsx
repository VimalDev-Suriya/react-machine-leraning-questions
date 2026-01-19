import { useEffect, useState } from "react"
import {useDebounce} from '../../hooks/useDebounce'

const UserInputDebounce = () => {
    const [input, setInput] = useState('');
    const debouncedValue = useDebounce(input, 2000)

    // * Debouncing 
    // * A rate limiting technique to prevent the function execution, to prevent the server with lot of loads  
    // useEffect(()=>{
    //     console.log('TIMER INITIATED')
    //     const timer = setTimeout(() => {
    //         console.log("Input entered", input)
    //     }, 2000);

    //     return () => {
    //         console.log('TIMER CLEARED')
    //         clearTimeout(timer);
    //     }
    // }, [input])

    useEffect(() => {
        console.log('deboucevalue', debouncedValue)
    }, [debouncedValue])

    const handleInput = e => {
        setInput(e.target.value);
    }

    return <div>
        <p>{input}</p>
        <input onChange={handleInput} value={input} placeholder="enter the input" />
    </div>
}

export default UserInputDebounce