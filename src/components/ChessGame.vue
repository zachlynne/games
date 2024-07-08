<template>
    <header>
        <h1>Chess</h1>
        <!-- make statements for whose turn it is and winner / tie -->
    </header>
    <main>
        <!-- board assignment coinsides with A to H and 1 to 8 for referencing moves -->
        <div class="board">

            <div class="column" v-on:click="handleClick">
                <div class="row odd" id="a8"></div>
                <div class="row even" id="a7"></div>
                <div class="row odd" id="a6"></div>
                <div class="row even" id="a5"></div>
                <div class="row odd" id="a4"></div>
                <div class="row even" id="a3"></div>
                <div class="row odd" id="a2"></div>
                <div class="row even" id="a1"></div>
            </div>
            <div class="column" v-on:click="handleClick">
                <div class="row even" id="b8"></div>
                <div class="row odd" id="b7"></div>
                <div class="row even" id="b6"></div>
                <div class="row odd" id="b5"></div>
                <div class="row even" id="b4"></div>
                <div class="row odd" id="b3"></div>
                <div class="row even" id="b2"></div>
                <div class="row odd" id="b1"></div>
            </div>
            <div class="column" v-on:click="handleClick">
                <div class="row odd" id="c8"></div>
                <div class="row even" id="c7"></div>
                <div class="row odd" id="c6"></div>
                <div class="row even" id="c5"></div>
                <div class="row odd" id="c4"></div>
                <div class="row even" id="c3"></div>
                <div class="row odd" id="c2"></div>
                <div class="row even" id="c1"></div>
            </div>
            <div class="column" v-on:click="handleClick">
                <div class="row even" id="d8"></div>
                <div class="row odd" id="d7"></div>
                <div class="row even" id="d6"></div>
                <div class="row odd" id="d5"></div>
                <div class="row even" id="d4"></div>
                <div class="row odd" id="d3"></div>
                <div class="row even" id="d2"></div>
                <div class="row odd" id="d1"></div>
            </div>
            <div class="column" v-on:click="handleClick">
                <div class="row odd" id="e8"></div>
                <div class="row even" id="e7"></div>
                <div class="row odd" id="e6"></div>
                <div class="row even" id="e5"></div>
                <div class="row odd" id="e4"></div>
                <div class="row even" id="e3"></div>
                <div class="row odd" id="e2"></div>
                <div class="row even" id="e1"></div>
            </div>
            <div class="column" v-on:click="handleClick">
                <div class="row even" id="f8"></div>
                <div class="row odd" id="f7"></div>
                <div class="row even" id="f6"></div>
                <div class="row odd" id="f5"></div>
                <div class="row even" id="f4"></div>
                <div class="row odd" id="f3"></div>
                <div class="row even" id="f2"></div>
                <div class="row odd" id="f1"></div>
            </div>
            <div class="column" v-on:click="handleClick">
                <div class="row odd" id="g8"></div>
                <div class="row even" id="g7"></div>
                <div class="row odd" id="g6"></div>
                <div class="row even" id="g5"></div>
                <div class="row odd" id="g4"></div>
                <div class="row even" id="g3"></div>
                <div class="row odd" id="g2"></div>
                <div class="row even" id="g1"></div>
            </div>
            <div class="column" v-on:click="handleClick">
                <div class="row even" id="h8"></div>
                <div class="row odd" id="h7"></div>
                <div class="row even" id="h6"></div>
                <div class="row odd" id="h5"></div>
                <div class="row even" id="h4"></div>
                <div class="row odd" id="h3"></div>
                <div class="row even" id="h2"></div>
                <div class="row odd" id="h1"></div>
            </div>
        </div>
    </main>
</template>

<script>

export default {

    data() {
        return {

            pieces: [
                {
                    type: 'Pawn',
                    position: 'a2',
                    playerOwned: 'white',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/whitePawn.png')"
                },
                {
                    type: 'Pawn',
                    position: 'b2',
                    playerOwned: 'white',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/whitePawn.png')"
                },
                {
                    type: 'Pawn',
                    position: 'c2',
                    playerOwned: 'white',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/whitePawn.png')"
                },
                {
                    type: 'Pawn',
                    position: 'd2',
                    playerOwned: 'white',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/whitePawn.png')"
                },
                {
                    type: 'Pawn',
                    position: 'e2',
                    playerOwned: 'white',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/whitePawn.png')"
                },
                {
                    type: 'Pawn',
                    position: 'f2',
                    playerOwned: 'white',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/whitePawn.png')"
                },
                {
                    type: 'Pawn',
                    position: 'g2',
                    playerOwned: 'white',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/whitePawn.png')"
                },
                {
                    type: 'Pawn',
                    position: 'h2',
                    playerOwned: 'white',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/whitePawn.png')"
                },

                {
                    type: 'Rook',
                    position: 'a1',
                    playerOwned: 'white',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/whiteRook.png')"
                },
                {
                    type: 'Rook',
                    position: 'h1',
                    playerOwned: 'white',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/whiteRook.png')"
                },

                {
                    type: 'Bishop',
                    position: 'b1',
                    playerOwned: 'white',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/whiteBishop.png')"
                },
                {
                    type: 'Bishop',
                    position: 'g1',
                    playerOwned: 'white',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/whiteBishop.png')"
                },

                {
                    type: 'Knight',
                    position: 'c1',
                    playerOwned: 'white',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/whiteKnight.png')"
                },
                {
                    type: 'Knight',
                    position: 'f1',
                    playerOwned: 'white',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/whiteKnight.png')"
                },

                {
                    type: 'King',
                    position: 'e1',
                    playerOwned: 'white',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/whiteKing.png')"
                },

                {
                    type: 'Queen',
                    position: 'd1',
                    playerOwned: 'white',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/whiteQueen.png')"
                },
                {
                    type: 'Pawn',
                    position: 'a7',
                    playerOwned: 'black',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/blackPawn.png')"
                },
                {
                    type: 'Pawn',
                    position: 'b7',
                    playerOwned: 'black',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/blackPawn.png')"
                },
                {
                    type: 'Pawn',
                    position: 'c7',
                    playerOwned: 'black',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/blackPawn.png')"
                },
                {
                    type: 'Pawn',
                    position: 'd7',
                    playerOwned: 'black',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/blackPawn.png')"
                },
                {
                    type: 'Pawn',
                    position: 'e7',
                    playerOwned: 'black',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/blackPawn.png')"
                },
                {
                    type: 'Pawn',
                    position: 'f7',
                    playerOwned: 'black',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/blackPawn.png')"
                },
                {
                    type: 'Pawn',
                    position: 'g7',
                    playerOwned: 'black',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/blackPawn.png')"
                },
                {
                    type: 'Pawn',
                    position: 'h7',
                    playerOwned: 'black',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/blackPawn.png')"
                },

                {
                    type: 'Rook',
                    position: 'a8',
                    playerOwned: 'black',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/blackRook.png')"
                },
                {
                    type: 'Rook',
                    position: 'h8',
                    playerOwned: 'black',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/blackRook.png')"
                },

                {
                    type: 'Bishop',
                    position: 'b8',
                    playerOwned: 'black',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/blackBishop.png')"
                },
                {
                    type: 'Bishop',
                    position: 'g8',
                    playerOwned: 'black',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/blackBishop.png')"
                },

                {
                    type: 'Knight',
                    position: 'c8',
                    playerOwned: 'black',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/blackKnight.png')"
                },
                {
                    type: 'Knight',
                    position: 'f8',
                    playerOwned: 'black',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/blackKnight.png')"
                },

                {
                    type: 'King',
                    position: 'e8',
                    playerOwned: 'black',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/blackKing.png')"
                },

                {
                    type: 'Queen',
                    position: 'd8',
                    playerOwned: 'black',
                    possibleMoves: new Array(),
                    isCaptured: false,
                    hasMoved: false,
                    image: "url('src/assets/blackQueen.png')"
                },
            ],
            listOfElements: null,
            testElement: null,
            pieceMoving: null,
            previousElement: null,
            currentPlayer: 'white',

        }
    },

    methods: {
        handleClick(event) {
            if (this.pieceMoving === null){
                this.pickPiece(event);
            } else {
                this.movePiece(event);
            }

        },
        setBoard() {
            this.listOfElements = document.getElementsByClassName("row");
            this.testElement = this.listOfElements[0];
            for (let i = 0; i < this.listOfElements.length; i++) {
                let currentElement = this.listOfElements[i]
                for (let j = 0; j < this.pieces.length; j++) {
                    if (this.pieces[j].position === this.listOfElements[i].id) {
                        let currentPiece = this.pieces[j];

                        // add class property of the unique piece (ie. "blackPawn") - controls movement ruleset
                        currentElement.classList.add(currentPiece.playerOwned + currentPiece.type);

                        // add class property of the player owning the piece (ie. "black") - controls access based on player's turn
                        currentElement.classList.add(currentPiece.playerOwned);
                    }
                }
            }
        },
        movePiece(event) {
            // define new (second) click as target to move to
            let newElement = event.target;

            // allow user to deselect / reset the picked piece
            if(newElement.id === this.pieceMoving.position) {   // if newly clicked cell is the same as the picked piece
                
                this.pieceMoving.possibleMoves.forEach( (moveAllowed) => {
                    document.getElementById(moveAllowed[0]+moveAllowed[1]).classList.remove("possibleMove");
                });

                this.pieceMoving.possibleMoves = new Array();   // set possibleMoves array to empty
                this.pieceMoving = null;                        // set pieceMoving to null to reset handleClick trigger
                return;
            }



            // check clicked location against possibleMoves( moves allowed )
            this.pieceMoving.possibleMoves.forEach( (possibleMove) => {

                // conditional to control move piece only if within possibleMoves 
                if(newElement.id === (possibleMove[0]+possibleMove[1]) ) {

                    // set moving piece's position to the clicked space
                    this.pieceMoving.position = newElement.id;

                    // remove piece from original position on the board
                    // example - remove class "black" + "Pawn"
                    this.previousElement.classList.remove(this.pieceMoving.playerOwned + this.pieceMoving.type);
                    // remove playerOwned from space
                    this.previousElement.classList.remove(this.pieceMoving.playerOwned);

                    // remove all css (class assignments) from the board FOR POSSIBLE MOVES (GREEN SQUARES)
                    this.pieceMoving.possibleMoves.forEach( (moveAllowed) => {

                            document.getElementById(moveAllowed[0]+moveAllowed[1]).classList.remove("possibleMove");

                        });

                    // reset possible moves array    
                    this.pieceMoving.possibleMoves = new Array();

                    // add the removed class (ie. blackPawn) to the newly selected element (space)
                    newElement.classList.add(this.pieceMoving.playerOwned + this.pieceMoving.type);
                    // add the removed playerOwned tag to the new space
                    newElement.classList.add(this.pieceMoving.playerOwned);

                    // set hasMoved for the piece being moved to true to block special moves in the future
                    this.pieceMoving.hasMoved = true;

                    // piece has moved, so set pieceMoving to null - prevents multiple moves in one turn
                    this.pieceMoving = null;

                    // if current player is white, make it black (and vice versa) -- set result to currentPlayer
                    this.currentPlayer = this.currentPlayer === 'white' ? 'black' : 'white';

                }
            });
        },
        pickPiece(event) {

            // select a piece to move by clicking on a square (board space)
            let element = event.target;

            // set reference to piece selected for removal in move piece function
            this.previousElement = element;

            // if the board space clicked on contains a piece owned by the current player ...
            if(element.classList.contains(this.currentPlayer)) {

                // pull location data (ie. 'a2') from the square that was clicked
                this.pieceMoving = this.pieces.find( (piece) => piece.position === element.id);

                if(this.pieceMoving.type === 'Pawn') {
                    this.showPossibleMovesPawn();
                }

            }
        },

        showPossibleMovesPawn() {

            // define row and column locations
            let currentColumn = this.pieceMoving.position.charAt(0);
            let currentRow = parseInt(this.pieceMoving.position.charAt(1));

            // show possible moves based on white / black orientation
            if(this.pieceMoving.playerOwned === 'white') {

                // add normal movement
                this.pieceMoving.possibleMoves.push( [currentColumn, currentRow + 1] );
                
                // add special movement for pawns that have not yet moved
                if(this.pieceMoving.hasMoved === false) {
                    this.pieceMoving.possibleMoves.push( [currentColumn, currentRow + 2] );
                }
                
                // for each move allowed by the piece, highlight that cell with a green border
                this.pieceMoving.possibleMoves.forEach( (moveAllowed) => {

                    document.getElementById(moveAllowed[0]+moveAllowed[1]).classList.add("possibleMove");

                }); 
                    
            }
            else if(this.pieceMoving.playerOwned === 'black') {

                // add normal movement
                this.pieceMoving.possibleMoves.push( [currentColumn, currentRow - 1] );
                
                // add special movement for pawns that have not yet moved
                if(this.pieceMoving.hasMoved === false) {
                    this.pieceMoving.possibleMoves.push( [currentColumn, currentRow - 2] );
                }
                
                // for each move allowed by the piece, highlight that cell with a green border
                this.pieceMoving.possibleMoves.forEach( (moveAllowed) => {

                    document.getElementById(moveAllowed[0]+moveAllowed[1]).classList.add("possibleMove");

                }); 


            }
        }
    },
    mounted() {
        this.setBoard();
    },
}

</script>


<style scoped>
/* Style for each of the columns on the board */

main {
    display: flex;
    justify-content: center;
}

.board {
    display: flex;

    flex-direction: row;

    height: fit-content;
    width: fit-content;

    border: 1px solid black;
    background-color: black;


}

.column {
    display: flex;

    flex-direction: column;

    height: 100%;
    width: 100%;

    justify-content: space-evenly;

}

/* Style for each of the rows on the board, with access to each piece in that row */
.row {
    display: flex;
    flex-direction: row;
    height: 100px;
    width: 100px;

    justify-content: space-evenly;
}

.even {
    background-color: grey;
}

.odd {
    background-color: white;
}

.possibleMove {
    border: 10px solid green;

}

main {
    margin: auto;
}

.blackPawn {
    background-image: url(src/assets/blackPawn.png);
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
}

.blackBishop {
    background-image: url(src/assets/blackBishop.png);
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
}

.blackKing {
    background-image: url(src/assets/blackKing.png);
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
}

.blackKnight {
    background-image: url(src/assets/blackKnight.png);
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
}

.blackQueen {
    background-image: url(src/assets/blackQueen.png);
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
}

.blackRook {
    background-image: url(src/assets/blackRook.png);
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
}

.whiteBishop {
    background-image: url(src/assets/whiteBishop.png);
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
}

.whiteKing {
    background-image: url(src/assets/whiteKing.png);
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
}

.whiteKnight {
    background-image: url(src/assets/whiteKnight.png);
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
}

.whitePawn {
    background-image: url(src/assets/whitePawn.png);
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
}

.whiteQueen {
    background-image: url(src/assets/whiteQueen.png);
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
}

.whiteRook {
    background-image: url(src/assets/whiteRook.png);
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
}

</style>