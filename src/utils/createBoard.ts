import { candy } from "./candyData";

export const createBoard = (boardSize: number = 8) =>
  Array(boardSize * boardSize)
    .fill(null)
    .map(() => candy[Math.floor(Math.random()*candy.length)]);
