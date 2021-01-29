# Shaun's Battleship Challenge! 🚢

The challenge here is to **create an interactive "Battleship" game**

## When you're done, create a Github repo with your completed code and send me a direct-message with the link

If you're not familiar with the Battleship board game (it was very popular here in America during my childhood),
you can read more about it [here](https://en.wikipedia.org/wiki/Battleship_(game))

For those who hate reading Wikipedia articles, here are the basics:
1. Battleship is a 2-player game. Each player has their own (usually 10x10) grid, which the other player cannot see.
2. Each box in the grid is referred to by a number and a letter (A1, D3, F8, B2, etc.), based on its coordinates:

      A | B | C | D | E | F | G | ...
    1 _ | _ | _ | _ | _ | _ | _ |
    2 _ | _ | _ | _ | _ | _ | _ |
    3 _ | _ | _ | _ | _ | _ | _ |
    4 _ | _ | _ | _ | _ | _ | _ |
    5 _ | _ | _ | _ | _ | _ | _ |
    6 _ | _ | _ | _ | _ | _ | _ |
    7 _ | _ | _ | _ | _ | _ | _ |
    ...

3. Each player has some number of ships (usually 4 or 5), placed in random places and orientations on their grid. These ships are different lengths (usually between 2 and 5 squares) and have names like "destroyer", "submarine", etc. Somewhat like this: (s = submarine, d = destroyer)

      A | B | C | D | E | F | G |
    1 _ | _ | _ | _ | _ | _ | _ |
    2 _ | _ | _ | _ | _ | _ | _ |
    3 _ | _ | _ | _ | _ | _ | _ |
    4 _ | s | s | s | _ | d | _ |
    5 _ | _ | _ | _ | _ | d | _ |
    6 _ | _ | _ | _ | _ | d | _ |
    7 _ | _ | _ | _ | _ | d | _ |

4. The players can only see their own ships - they have no idea where the other player's ships are.
5. The two players take turns guessing individual square coordinates on the other player's board (ex. "A2", "B4", "F6", etc.). If there is a ship at that coordinate, it's considered a "hit". Otherwise, it's a "miss".
6. When every square of a player's ship is "hit", that ship is "sunk"
7. The goal is to sink all of the other player's ships before they sink all of yours. When this happens, the game is over.

## So what do I need to build?

Your goal is to create this game in React. I've given you some basic sample code to get you started, but the exact details are up to you - this one's not as strict as the first challenge :) Here are the main things to implement:

1. The game should display the two players' grids (with the ships hidden)
2. Each player should take turns clicking on the other player's grid
3. Mark whatever box they clicked on depending on if it's a "hit" or a "miss"
4. Keep track of which ships have been sunk

Besides that, just have fun with it and feel free to add any other cool features you can think of.

## Getting the app running

1. Clone this repo with: `git clone https://github.com/shaunwa/calendar-challenge-starter.git calendar-challenge`
2. `cd calendar-challenge`
3. Install dependencies: `npm install`
4. Run it: `npm run start`
5. See it running on localhost:3000

That's it!