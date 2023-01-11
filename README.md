# Chessington

1. Fork this repo
    * Go to this repo's GitHub page ({url here})
    * Click `Fork` in the top-right of the page - this will create a copy of this repo in **your own GitHub account**

2. Clone (download) the repo
    * Go to your newly-created fork of the repo (on GitHub).
    * Click `Clone or download` (the green button on the right).
    * Make sure the page says `Clone with SSH` (rather than `Clone with HTTPS`).
    * Open your git client (e.g. GitKraken) and use this link to clone the repo.  
    Your trainer will able to help you with this.

3. "Cloning the repo" will create a folder on your computer with the files from this repo.  
Open this folder in IntelliJ / Visual Studio Code.

4. Open a command-prompt in this same folder.  
Your trainer can show you how to do this, if you need any help.

5. Run this command to set up the necessary dependencies:  
`npm install`

6. Run this command to run your code:  
`npm start`
This will start a webserver at `localhost:3000`

7. Run this command to run the tests:  
`npm test`


Guide to the code
=================

## Board

When a board is created it initialises a 2-dimensional array of length 8.
That is, an array of 8 arrays, where each array inside has a length of 8.

These represent rows and columns.

So, to select the first row you can do 
`let row1 = board[0]`
And to get the second square of that row:
`let square = row1[1]`
Or, in shorthand:
`let square = board[0][1]`

`Board` then has the following methods to use:
`setPiece(square, piece)` places the given piece on a square returns nothing.
`getPiece(square)` returns the piece on a given square, if one is there.
`findPiece(pieceToFind)` will return the square that the piece is on, if it is on the board.
`movePiece(fromSquare, toSquare)` will move the piece on the fromSquare to the toSquare.

## Square

Squares have two properties: `row` and `col`.

Squares can be made one of two ways (I'm not really sure why...)
`let square1 = Square.at(0,1)`
OR
`let square2 = new Square(0,1)`
These are equal. You can check like this:
`square1.equals(square2)`. This will return a boolean (in this case, true.)

## Pieces

pieces have one method: `getAvailableMoves(board)`.
This method must be given the current board (so that it can know which moves are available!)
it returns an array, which is a list of `Square`s that are available to be moved to.
