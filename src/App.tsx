import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { dragEnd, moveBelow,updateBoard } from "./store";
import { createBoard } from "./utils/createBoard";
import Board from "./components/Board";
import { formulaForColumnFour, formulaForColumnThree, generateInvalidmoves } from "./utils/formulas";
import { checkcolumnOfFour, checkcolumnOfThree, checkForRowOfFour,checkForRowOfThree } from "./utils/movelogic";

function App() {
  const dispatch = useAppDispatch();
  const board = useAppSelector(({ candy: { board } }) => board);
  const boardSize = useAppSelector(({ candy: { boardSize } }) => boardSize);
  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)));
  }, [boardSize, dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newBoard = [...board];
      checkcolumnOfFour(newBoard, boardSize, formulaForColumnFour(boardSize));
      checkForRowOfFour(newBoard, boardSize, generateInvalidmoves(boardSize,true));
      checkcolumnOfThree(newBoard, boardSize, formulaForColumnThree(boardSize));
      checkForRowOfThree(newBoard, boardSize, generateInvalidmoves(boardSize,true));

     
      dispatch(updateBoard(newBoard));
      dispatch(moveBelow());
      dispatch(dragEnd());
    }, 150);
    return () => clearInterval(timeout);
  }, [board, boardSize, dispatch]);

  return (<>
  
    <div className="flex items-center justify-center h-screen">
      
      <Board />
      
    </div>
    </>
  );
}

export default App;
