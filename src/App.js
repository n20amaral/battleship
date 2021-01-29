import { BattleShipGame } from './BattleShipGame';
import './App.css';

// Here are some sample positions for the ships on the players' grids
const player1Positions = [{
    name: 'Battleship',
    squares: ['C5', 'D5', 'E5'],
}, {
    name: 'Destroyer',
    squares: ['F5', 'F6', 'F7', 'F8'],
}, {
    name: 'Aircraft Carrier',
    squares: ['B1', 'C1', 'D1', 'E1', 'F1'],
}, {
    name: 'Small Ship',
    squares: ['J9', 'J10'],
}, {
    name: 'Submarine',
    squares: ['H4', 'H5', 'H6'],
}];

const player2Positions = [{
    name: 'Battleship',
    squares: ['C5', 'C6', 'C7'],
}, {
    name: 'Destroyer',
    squares: ['F1', 'F2', 'F3', 'F4'],
}, {
    name: 'Aircraft Carrier',
    squares: ['B5', 'C5', 'D5', 'E5', 'F5'],
}, {
    name: 'Small Ship',
    squares: ['I4', 'J4'],
}, {
    name: 'Submarine',
    squares: ['A7', 'A8', 'A9'],
}];

function App() {
    // The BattleShipGame component takes the positions as props, as well as the desired
    // board size (i.e. if you wanted a larger board)
    return (
        <BattleShipGame
            player1Positions={player1Positions}
            player2Positions={player2Positions}
            xSize={10}
            ySize={10} />
    );
}

export default App;
