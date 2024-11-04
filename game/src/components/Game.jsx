import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helper';

import './Game.css'


const Game = () => {
    const [board, setBoard]=useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleclick = (index) => {
        const  boardCopy = [...board]
  
        if(winner || boardCopy[index]) return
        boardCopy[index] = xIsNext ? 'X' : '0'
        setBoard(boardCopy);
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return (
            <button 
                className='start__btn' 
                onClick={() => {
                    setBoard(Array(9).fill(null))
                }} 
            >
                Очистити поле
            </button>
        )
    }

    return (
        <div className='wrapper'>
            {  startNewGame() }
           <Board squares={board} click={handleclick}/> 
           <p className='game__info'>
            { winner ? 'Переміг : ' + winner : 'Ваш хід : ' + (xIsNext ? 'X' : 'O' ) }
           </p>
        </div>
    );
}

export default Game;
