import { useState } from "react";


export default function Square({value, onSquareClick})
{
 //   const[value, setState] = useState(null);

/*    function handleClick()
    {
        setState('X');
    }*/

    return <button onClick={onSquareClick} className="square">{value}</button>

}

