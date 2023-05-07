export const checkcolumnOfFour = (
  newBoard: string[],
  boardSize: number,
  formulaForColumnFour: number
) => {
  for (let i: number = 0; i <= formulaForColumnFour; i++) {
    const columnofFour: number[] = [
      i,
      i + boardSize,
      i + boardSize * 2,
      i + boardSize * 3,
    ];

    const decideColor: string = newBoard[i];
    const isBlank: boolean = newBoard[i] === "";
    if (
      columnofFour.every(
        (candy: number) => newBoard[candy] === decideColor && !isBlank
      )
    ) {
      columnofFour.forEach((candy: number) => {
        newBoard[candy] = "";
      });
      return true;
    }
  }
};

export const checkcolumnOfThree = (
  newBoard: string[],
  boardSize: number,
  formulaForColumnThree: number
) => {
  for (let i: number = 0; i <= formulaForColumnThree; i++) {
    const columnofThree: number[] = [i, i + boardSize, i + boardSize * 2];

    const decideColor: string = newBoard[i];
    const isBlank: boolean = newBoard[i] === "";
    if (
      columnofThree.every(
        (candy: number) => newBoard[candy] === decideColor && !isBlank
      )
    ) {
      columnofThree.forEach((candy: number) => {
        newBoard[candy] = "";
      });
      return true;
    }
  }
};

export const checkForRowOfFour = (
  newBoard: string[],
  boardSize: number,
  invalidmoves: number[]
) => {
  for (let i: number = 0; i <= boardSize * boardSize; i++) {
    const rowofFour: number[] = [i, i + 1, i + 2, i + 3];

    const decideColor: string = newBoard[i];
    const isBlank: boolean = newBoard[i] === "";
    if (invalidmoves.includes(i)) continue;

    if (
      rowofFour.every(
        (candy: number) => newBoard[candy] === decideColor && !isBlank
      )
    ) {
      rowofFour.forEach((candy: number) => {
        newBoard[candy] = "";
      });
      return true;
    }
  }
};

export const checkForRowOfThree= (
    newBoard: string[],
    boardSize: number,
    invalidmoves: number[]
  ) => {
    for (let i: number = 0; i <= boardSize * boardSize; i++) {
      const rowofThree: number[] = [i, i + 1, i + 2];
  
      const decideColor: string = newBoard[i];
      const isBlank: boolean = newBoard[i] === "";
      if (invalidmoves.includes(i)) continue;
  
      if (
        rowofThree.every(
          (candy: number) => newBoard[candy] === decideColor && !isBlank
        )
      ) {
        rowofThree.forEach((candy: number) => {
          newBoard[candy] = "";
        });
        return true;
      }
    }
  };
  
