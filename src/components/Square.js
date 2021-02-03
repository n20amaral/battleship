import { Box } from "@chakra-ui/react";
import { useState } from "react";

const Square = ({ onSquarePress, hasShip }) => {
  const [isDestroyed, setDestroyed] = useState(false);

  return (
    <Box
      w={50}
      h={50}
      bgColor={isDestroyed ? "red.600" : "blue.600"}
      onClick={() => {
        if (isDestroyed) {
          return;
        } else if (hasShip) {
          setDestroyed(true);
        }

        onSquarePress();
      }}
    />
  );
};

export default Square;
