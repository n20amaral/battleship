import Board from "./components/Board";
import { Flex } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

export const BattleShipGame = ({
  player1Positions,
  player2Positions,
  xSize,
  ySize,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalMessage, setModalMessage] = useState("");

  const players = [player1Positions, player2Positions];
  const onSquarePress = (coord, player) => {
    if (!coord) {
      return;
    }

    const playerSet = players[player - 1];

    const shipIndex = playerSet.findIndex((ship) =>
      ship.squares.includes(coord)
    );
    const ship = playerSet[shipIndex];

    ship.squares = ship.squares.filter((value) => value !== coord);

    if (!ship.squares.length) {
      const remainingShips = playerSet.filter(
        (ship) => ship.squares.length > 0
      );
      const gameOverMessage =
        remainingShips.length > 0
          ? ""
          : "<br />...GAME OVER...<br />YOU WON!!!";
      setModalMessage(`You DESTROYED a ${ship.name}${gameOverMessage}`);
      onOpen();
    }
  };

  const boardProps = {
    xSize,
    ySize,
    onSquarePress,
  };

  return (
    <>
      <Flex justifyContent="space-between">
        <Board {...boardProps} playerPositions={player1Positions} player={1} />
        <Board {...boardProps} playerPositions={player2Positions} player={2} />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody textAlign="center">
            <p dangerouslySetInnerHTML={{ __html: modalMessage }} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
