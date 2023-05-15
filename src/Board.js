import { useState } from "react";
import Square from "./Square";
import "./index.css"

export default function Board()
{
    const [isXNext, setIsXNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const allPossibleLines =
    [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [2,5,8]
    ]

    function handleClick(i)
    {
        if(squares[i] || HaveAWinner(squares))
            return;

        const nextSquares = squares.slice();
        nextSquares[i] = isXNext ? 'X': 'O';
        setSquares(nextSquares);
        setIsXNext(!isXNext);
    }

    function HaveAWinner(squaresToCheck)
    {
        allPossibleLines.forEach(element => {
            if(squaresToCheck[element[0]]  && (squaresToCheck[element[0]] === squaresToCheck[element[1]] ) && (squaresToCheck[element[0]] === squaresToCheck[element[2]]))
            {
                return true;
            }
            else
            {
                 return false;
            }
        });
    }

    return ( 
    <div > 
    <div className="board-row">
    <Square value={squares[0]} onSquareClick = {() => handleClick(0)} />
    <Square value={squares[1]} onSquareClick = {() => handleClick(1)} />
    <Square value={squares[2]} onSquareClick = {() => handleClick(2)} />
    </div>
    <div className="board-row">
    <Square value={squares[3]} onSquareClick = {() => handleClick(3)} />
    <Square value={squares[4]} onSquareClick = {() => handleClick(4)} />
    <Square value={squares[5]} onSquareClick = {() => handleClick(5)} />
    </div>
    <div className="board-row">
    <Square value={squares[6]} onSquareClick = {() => handleClick(6)} />
    <Square value={squares[7]} onSquareClick = {() => handleClick(7)} />
    <Square value={squares[8]} onSquareClick = {() => handleClick(8)} />
    </div>
    </div>);

}