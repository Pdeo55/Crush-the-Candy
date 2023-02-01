import React from 'react'
import { useAppSelector } from '../store/hooks'
import Tile from './Tile';

function Board() {
    const board = useAppSelector(({candy:{board}})=>board);
    const boardSize = useAppSelector(({candy:{boardSize}})=>boardSize);
  return (
    <div className='flex flex-wrap rounded-lg' style={{
        width:`${6.25*boardSize}rem`,
    }}>
        {
            board.map((candy:string,index:number)=>(
                <Tile candy={candy} key={index} candyId={index}/>
            ))
        }
    </div>
  )
}

export default Board