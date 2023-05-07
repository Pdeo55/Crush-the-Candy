
export const formulaForColumnFour = (boardSize:number)=>
    boardSize*boardSize-(boardSize+boardSize+boardSize)-1

// 64-24-1=39
// here for 8 total candy will be 8*8 =64 
// so we have to skip last 3 lines as there is set of 4 for the poping thats wy we deleting last 3 HTMLTableRowElement
// elements if.ie 8+8+8 = 24
// And as we are using are and array start with 0 so minusing 1 from it



export const formulaForColumnThree = (boardSize:number)=>
    boardSize*boardSize-(boardSize+boardSize)-1

export const generateInvalidmoves=(
    boardSize:number,
    isFour:boolean =false) =>{
        const invalidmoves:Array<number> =[];

        for (let i:number = boardSize; i <= boardSize; i+=boardSize) {
            if (isFour) 
                invalidmoves.push(i-3);
                invalidmoves.push(i-2);
                invalidmoves.push(i-1);
                
            
            
        }
        return invalidmoves;
    }

    export const formulaForMoveBelow = (boardSize: number) =>
    boardSize * boardSize - boardSize - 1;