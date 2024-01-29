import { useState } from "preact/hooks"

export const Counter = () => {

    const [counter, setCounter] = useState(0)

    return (
        <>
            <span class='text-gray-500 text-xl mr-4'> {counter} </span>
            <button class='border px-4 py-2 text-xl' onClick={() => setCounter(counter => counter + 1)}> + </button>
            <button class='border px-4 py-2 text-xl' onClick={() => setCounter(counter => counter - 1)}> - </button>
        </>
    )
}
