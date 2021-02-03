import { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Square from "./Square";

const Board = ({ playerPositions, onSquarePress, player, xSize, ySize }) => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    const positions = [];
    const hittableSquares = playerPositions
      .map(({ squares }) => squares)
      .flat();
    const firstCharCode = "A".charCodeAt(0);
    const lastCharCode = firstCharCode + xSize;
    for (let row = 1; row <= ySize; row++) {
      for (let col = firstCharCode; col < lastCharCode; col++) {
        const position = `${String.fromCharCode(col)}${row}`;
        const hasShip = hittableSquares.includes(position);

        positions.push(
          <Square
            key={position}
            hasShip={hasShip}
            onSquarePress={() => onSquarePress(hasShip ? position : "", player)}
          />
        );
      }
    }

    setAllPositions(positions);
  }, []);

  return (
    <SimpleGrid columns={xSize} w={50 * xSize} spacing={0.5} m={10}>
      {allPositions.length > 0 && allPositions}
    </SimpleGrid>
  );
};
export default Board;
