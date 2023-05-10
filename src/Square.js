import { useState } from "react";


export default function Square()
{
    const[value, setState] = useState(null);

    function handleClick()
    {
        setState('X');
    }

    return <button onClick={handleClick} className="square">{value}</button>

}

