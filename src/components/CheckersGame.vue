<template>
    <header>
        <h1>Checkers</h1>
        <!-- make statements for whose turn it is and winner / tie -->
    </header>
    <main>
        <div class="board">
            <div class="column" v-on:click="handleClick">
                <div class="row odd red" id="a1"></div>
                <div class="row even" id="a2"></div>
                <div class="row odd red" id="a3"></div>
                <div class="row even" id="a4"></div>
                <div class="row odd" id="a5"></div>
                <div class="row even" id="a6"></div>
                <div class="row odd white" id="a7"></div>
                <div class="row even" id="a8"></div>
            </div>
            <div class="column" v-on:click="handleClick">
                <div class="row even" id="b1"></div>
                <div class="row odd red" id="b2"></div>
                <div class="row even" id="b3"></div>
                <div class="row odd" id="b4"></div>
                <div class="row even" id="b5"></div>
                <div class="row odd white" id="b6"></div>
                <div class="row even" id="b7"></div>
                <div class="row odd white" id="b8"></div>
            </div>
            <div class="column" v-on:click="handleClick">
                <div class="row odd red" id="c1"></div>
                <div class="row even" id="c2"></div>
                <div class="row odd red" id="c3"></div>
                <div class="row even" id="c4"></div>
                <div class="row odd" id="c5"></div>
                <div class="row even" id="c6"></div>
                <div class="row odd white" id="c7"></div>
                <div class="row even" id="c8"></div>
            </div>
            <div class="column" v-on:click="handleClick">
                <div class="row even" id="d1"></div>
                <div class="row odd red" id="d2"></div>
                <div class="row even" id="d3"></div>
                <div class="row odd" id="d4"></div>
                <div class="row even" id="d5"></div>
                <div class="row odd white" id="d6"></div>
                <div class="row even" id="d7"></div>
                <div class="row odd white" id="d8"></div>
            </div>
            <div class="column" v-on:click="handleClick">
                <div class="row odd red" id="e1"></div>
                <div class="row even" id="e2"></div>
                <div class="row odd red" id="e3"></div>
                <div class="row even" id="e4"></div>
                <div class="row odd" id="e5"></div>
                <div class="row even" id="e6"></div>
                <div class="row odd white" id="e7"></div>
                <div class="row even" id="e8"></div>
            </div>
            <div class="column" v-on:click="handleClick">
                <div class="row even" id="f1"></div>
                <div class="row odd red" id="f2"></div>
                <div class="row even" id="f3"></div>
                <div class="row odd" id="f4"></div>
                <div class="row even" id="f5"></div>
                <div class="row odd white" id="f6"></div>
                <div class="row even" id="f7"></div>
                <div class="row odd white" id="f8"></div>
            </div>
            <div class="column" v-on:click="handleClick">
                <div class="row odd red" id="g1"></div>
                <div class="row even" id="g2"></div>
                <div class="row odd red" id="g3"></div>
                <div class="row even" id="g4"></div>
                <div class="row odd" id="g5"></div>
                <div class="row even" id="g6"></div>
                <div class="row odd white" id="g7"></div>
                <div class="row even" id="g8"></div>
            </div>
            <div class="column" v-on:click="handleClick">
                <div class="row even" id="h1"></div>
                <div class="row odd red" id="h2"></div>
                <div class="row even" id="h3"></div>
                <div class="row odd" id="h4"></div>
                <div class="row even" id="h5"></div>
                <div class="row odd white" id="h6"></div>
                <div class="row even" id="h7"></div>
                <div class="row odd white" id="h8"></div>
            </div>
        </div>
    </main>
</template>

<script>

export default {
    data() {
        return {
            currentPlayer: "red", // red goes first
            otherPlayer: "white", // white goes second
            rowPosition: ["1", "2", "3", "4", "5", "6", "7", "8"],
            columnPosition: ["a", "b", "c", "d", "e", "f", "g", "h"],
            gameOver: false,
            winner: "",
            elementId: null,
            moveCounter: 0,
            numberOfRedPieces: 12,
            numberOfWhitePieces: 12,
            possibleMovesOnBoard: false,
            possibleMoves: null,
            jumpMoves: null,
            possibleCaptures: new Map(),
            pieceMoving: null,
            pieceCaptured: false,

            // redPiece: { element: null },     // setting up for use of objects
            // whitePiece: { element: null }    // setting up for use of objects

        }
    },
    methods: {
        handleClick() {
            // Only allows clicks on odd squares
            if (event.target.classList.contains("odd")) {

                if (this.possibleCaptures.size > 0 && this.pieceCaptured === true) {
                    this.doubleJump(event);
                }
                else if (this.possibleMovesOnBoard === false) { //possibleMovesOnBoard
                    this.checkPossibleMoves(event);
                } else {
                    this.movePiece(event);
                }
            }
        },

        checkPossibleMoves(event) {  // check if there are any possible moves

            let element = event.target; // get the element that was clicked

            this.possibleMoves = null;

            if (this.currentPlayer === "red") { // if it is red's turn

                if (element.classList.contains("red")) { // if the element is red
                    // Add possible moves for non-jumping pieces
                    this.checkRedMoves(element);
                }

            } else if (this.currentPlayer === "white") {

                if (element.classList.contains("white")) {

                    this.checkWhiteMoves(element);
                }
            }

            if (this.possibleMoves) {
                // Check if possible moves are valid
                this.displayAllPossibleMoves();
                // Set pieceMoving equal to the current piece being targeted to move
                this.pieceMoving = element;
                // Populate possibleMoves array with elements that contain the class "possibleMove"
                this.possibleMoves = document.getElementsByClassName("possibleMove");

                this.possibleMovesOnBoard = true;

            }


        },

        movePiece(event) {
            let element = event.target;

            // Reset possible moves if piece is clicked again
            if (element === this.pieceMoving) {
                for (let i = this.possibleMoves.length - 1; i >= 0; i--) {
                    this.possibleMoves[i].classList.remove("possibleMove");
                }
                this.possibleMovesOnBoard = false;
                return;
            }

            // Capture Jumped Piece
            if (this.possibleCaptures.has(element)) {
                let possibleMove = this.possibleCaptures.get(element);
                possibleMove.classList.remove(this.otherPlayer);
                possibleMove.classList.remove("king");
                this.possibleCaptures = new Map();
                this.pieceCaptured = true;

                if (this.otherPlayer === "red"){
                    this.numberOfRedPieces--;
                    if (this.numberOfRedPieces === 0) {
                        this.gameOver = true;
                        alert("White Wins");
                    }
                } else if (this.otherPlayer === "white"){
                    this.numberOfWhitePieces--;
                    if (this.numberOfWhitePieces === 0) {
                        this.gameOver = true;
                        alert("Red Wins");
                    }
                }
            }

            // Move Piece
            if (element.classList.contains("possibleMove")) {

                // Add piece to new location
                element.classList.add(this.currentPlayer);
                // Remove piece from old location
                this.pieceMoving.classList.remove(this.currentPlayer);


                // Check if King and add className
                if (this.pieceMoving.classList.contains("king")) {
                    element.classList.add("king");
                    // Remove king from old location
                    this.pieceMoving.classList.remove("king");
                }


                // Adds king className if a red piece lands in the bottom row
                if (this.currentPlayer === "red" && element.id.charAt(1) === "8") {
                    element.classList.add("king");
                    // Adds king className if a white piece lands in the top row    
                } else if (this.currentPlayer === "white" && element.id.charAt(1) === "1") {
                    element.classList.add("king");
                }



                // Increment move counter
                this.moveCounter++;

                // Reset possible moves
                for (let i = this.possibleMoves.length - 1; i >= 0; i--) {
                    this.possibleMoves[i].classList.remove("possibleMove");
                }

                if (this.pieceCaptured === false) {

                    // Switch players
                    this.otherPlayer = this.currentPlayer;
                    this.currentPlayer = this.currentPlayer === "red" ? "white" : "red"; // switch players
                    this.possibleMovesOnBoard = false;

                } else {    //recreate possible jumps

                    if (this.currentPlayer === "white") {

                        // Add possible moves for non-jumping pieces
                        this.checkWhiteMoves(element);
                        if (this.possibleMoves) {
                            // Check if possible moves are valid
                            this.displayOnlyPossibleJumpMoves();
                        }
                    }
                    if (this.currentPlayer === "red") {

                        // Add possible moves for non-jumping pieces
                        this.checkRedMoves(element);
                        if (this.possibleMoves) {
                            this.displayOnlyPossibleJumpMoves();
                        }
                    }
                    // Set pieceMoving equal to the current piece being targeted to move
                    this.pieceMoving = element;
                    // Populate possibleMoves array with elements that contain the class "possibleMove"
                    this.possibleMoves = document.getElementsByClassName("possibleMove");

                    // Switch players when no more jumps available
                    if (this.possibleCaptures.size === 0) {
                        // Switch players
                        this.pieceCaptured = false;
                        this.otherPlayer = this.currentPlayer;
                        this.currentPlayer = this.currentPlayer === "red" ? "white" : "red"; // switch players

                        this.possibleMovesOnBoard = false;

                    }
                }
            }
        },

        doubleJump(event) {

            // Set pieceCapture to false will allow while loop exit if no jumps available
            this.pieceCaptured = false;

            // Establish new starting position
            let element = event.target;

            // Capture Jumped Piece
            if (this.possibleCaptures.has(element)) {
                let possibleMove = this.possibleCaptures.get(element);
                possibleMove.classList.remove(this.otherPlayer);
                possibleMove.classList.remove("king");
                this.possibleCaptures = new Map();
                this.pieceCaptured = true;

                if (this.otherPlayer === "red"){
                    this.numberOfRedPieces--;
                    if (this.numberOfRedPieces === 0) {
                        this.gameOver = true;
                        alert("White Wins");
                    }
                } else if (this.otherPlayer === "white"){
                    this.numberOfWhitePieces--;
                    if (this.numberOfWhitePieces === 0) {
                        this.gameOver = true;
                        alert("Red Wins");
                    }
                }

                
            }

            // Add piece to new location
            element.classList.add(this.currentPlayer);
            // Remove piece from old location
            this.pieceMoving.classList.remove(this.currentPlayer);


            // Check if King and add className
            if (this.pieceMoving.classList.contains("king")) {
                element.classList.add("king");
                // Remove king from old location
                this.pieceMoving.classList.remove("king");
            }


            // Adds king className if a red piece lands in the bottom row
            if (this.currentPlayer === "red" && element.id.charAt(1) === "8") {
                element.classList.add("king");
                // Adds king className if a white piece lands in the top row    
            } else if (this.currentPlayer === "white" && element.id.charAt(1) === "1") {
                element.classList.add("king");
            }


            // Reassign pieceMoving to the new location
            this.pieceMoving = element;
            // Increment move counter
            this.moveCounter++;


            // Populate possibleMoves array with elements that contain the class "possibleMove"
            this.possibleMoves = document.getElementsByClassName("possibleMove");

            // Reset possible moves
            if (this.possibleMoves) {

                for (let i = this.possibleMoves.length - 1; i >= 0; i--) {
                    this.possibleMoves[i].classList.remove("possibleMove");
                }
            }


            if (this.pieceCaptured) {
                // Add possible moves for non-jumping pieces
                if (this.currentPlayer === "white") {
                    this.checkWhiteMoves(element);
                } else if (this.currentPlayer === "red") {
                    this.checkRedMoves(element);
                }

                if (this.possibleMoves) {
                    // Check if possible moves are valid
                    this.displayOnlyPossibleJumpMoves();
                }
            }
            // Switch players when no more jumps available
            if (this.pieceCaptured === false || this.possibleCaptures.size === 0) {

                // Switch players
                this.pieceCaptured = false;
                this.otherPlayer = this.currentPlayer;
                this.currentPlayer = this.currentPlayer === "red" ? "white" : "red"; // switch players

                this.possibleMovesOnBoard = false;


            }
        },

        checkRedMoves(element) {
            // Check for King Moves if element contains kinged piece
            if (element.classList.contains("king")) {
                this.checkKingMoves(element);
            } // Check if red has any possible moves
            else {
                // Check if red has any possible moves
                let row = element.id.charAt(1);
                let column = element.id.charAt(0);

                // Add possible moves for non-jumping pieces
                this.possibleMoves = [
                    this.columnPosition[this.columnPosition.indexOf(column) - 1] + (parseInt(row) + 1),
                    this.columnPosition[this.columnPosition.indexOf(column) + 1] + (parseInt(row) + 1)
                ];
                // Add possible moves for jumping pieces
                this.jumpMoves = [
                    this.columnPosition[this.columnPosition.indexOf(column) - 2] + (parseInt(row) + 2),
                    this.columnPosition[this.columnPosition.indexOf(column) + 2] + (parseInt(row) + 2)
                ];
            }
        },
        checkWhiteMoves(element) {
            // Check for King Moves if element contains kinged piece
            if (element.classList.contains("king")) {
                this.checkKingMoves(element);
            } // Check if white has any possible moves
            else {
                let row = element.id.charAt(1);
                let column = element.id.charAt(0);

                // Add possible moves for non-jumping pieces
                this.possibleMoves = [
                    this.columnPosition[this.columnPosition.indexOf(column) - 1] + (parseInt(row) - 1),
                    this.columnPosition[this.columnPosition.indexOf(column) + 1] + (parseInt(row) - 1)
                ];
                // Add possible moves for jumping pieces
                this.jumpMoves = [
                    this.columnPosition[this.columnPosition.indexOf(column) - 2] + (parseInt(row) - 2),
                    this.columnPosition[this.columnPosition.indexOf(column) + 2] + (parseInt(row) - 2)
                ];
            }
        },
        checkKingMoves(element) {
            let row = element.id.charAt(1);
            let column = element.id.charAt(0);

            // Add possible moves for non-jumping pieces
            this.possibleMoves = [
                this.columnPosition[this.columnPosition.indexOf(column) - 1] + (parseInt(row) - 1),
                this.columnPosition[this.columnPosition.indexOf(column) + 1] + (parseInt(row) - 1),
                this.columnPosition[this.columnPosition.indexOf(column) - 1] + (parseInt(row) + 1),
                this.columnPosition[this.columnPosition.indexOf(column) + 1] + (parseInt(row) + 1)
            ];
            // Add possible moves for jumping pieces
            this.jumpMoves = [
                this.columnPosition[this.columnPosition.indexOf(column) - 2] + (parseInt(row) - 2),
                this.columnPosition[this.columnPosition.indexOf(column) + 2] + (parseInt(row) - 2),
                this.columnPosition[this.columnPosition.indexOf(column) - 2] + (parseInt(row) + 2),
                this.columnPosition[this.columnPosition.indexOf(column) + 2] + (parseInt(row) + 2)
            ];
        },
        displayAllPossibleMoves() {
            let possibleMove = document.getElementById(this.possibleMoves[0]);
            let jumpMove = document.getElementById(this.jumpMoves[0]);
            if (possibleMove && !possibleMove.classList.contains("red") && !possibleMove.classList.contains("white")) {
                possibleMove.classList.add("possibleMove");
                // Add possible moves for jumping pieces
            } else if (possibleMove && possibleMove.classList.contains(this.otherPlayer) && jumpMove && !jumpMove.classList.contains("red") && !jumpMove.classList.contains("white")) {
                jumpMove.classList.add("possibleMove");
                // Add possible captures to map
                this.possibleCaptures.set(jumpMove, possibleMove);
            }
            possibleMove = document.getElementById(this.possibleMoves[1]);
            jumpMove = document.getElementById(this.jumpMoves[1]);
            if (possibleMove && !possibleMove.classList.contains("red") && !possibleMove.classList.contains("white")) {
                possibleMove.classList.add("possibleMove");
                // Add possible moves for jumping pieces
            } else if (possibleMove && possibleMove.classList.contains(this.otherPlayer) && jumpMove && !jumpMove.classList.contains("red") && !jumpMove.classList.contains("white")) {
                jumpMove.classList.add("possibleMove");
                // Add possible captures to map
                this.possibleCaptures.set(jumpMove, possibleMove);
            }
            possibleMove = document.getElementById(this.possibleMoves[2]);
            jumpMove = document.getElementById(this.jumpMoves[2]);
            if (possibleMove && !possibleMove.classList.contains("red") && !possibleMove.classList.contains("white")) {
                possibleMove.classList.add("possibleMove");
                // Add possible moves for jumping pieces
            } else if (possibleMove && possibleMove.classList.contains(this.otherPlayer) && jumpMove && !jumpMove.classList.contains("red") && !jumpMove.classList.contains("white")) {
                jumpMove.classList.add("possibleMove");
                // Add possible captures to map
                this.possibleCaptures.set(jumpMove, possibleMove);
            }
            possibleMove = document.getElementById(this.possibleMoves[3]);
            jumpMove = document.getElementById(this.jumpMoves[3]);
            if (possibleMove && !possibleMove.classList.contains("red") && !possibleMove.classList.contains("white")) {
                possibleMove.classList.add("possibleMove");
                // Add possible moves for jumping pieces
            } else if (possibleMove && possibleMove.classList.contains(this.otherPlayer) && jumpMove && !jumpMove.classList.contains("red") && !jumpMove.classList.contains("white")) {
                jumpMove.classList.add("possibleMove");
                // Add possible captures to map
                this.possibleCaptures.set(jumpMove, possibleMove);
            }
        },
        displayOnlyPossibleJumpMoves() {
            // Check if possible moves are valid
            let possibleMove = document.getElementById(this.possibleMoves[0]);
            let jumpMove = document.getElementById(this.jumpMoves[0]);

            // Add possible moves for jumping pieces                     
            if (possibleMove && possibleMove.classList.contains(this.otherPlayer) && jumpMove && !jumpMove.classList.contains("red") && !jumpMove.classList.contains("white")) {
                jumpMove.classList.add("possibleMove");
                // Add possible captures to map
                this.possibleCaptures.set(jumpMove, possibleMove);
            }

            possibleMove = document.getElementById(this.possibleMoves[1]);
            jumpMove = document.getElementById(this.jumpMoves[1]);

            // Add possible moves for jumping pieces
            if (possibleMove && possibleMove.classList.contains(this.otherPlayer) && jumpMove && !jumpMove.classList.contains("red") && !jumpMove.classList.contains("white")) {
                jumpMove.classList.add("possibleMove");
                // Add possible captures to map
                this.possibleCaptures.set(jumpMove, possibleMove);
            }
            possibleMove = document.getElementById(this.possibleMoves[2]);
            jumpMove = document.getElementById(this.jumpMoves[2]);

            // Add possible moves for jumping pieces
            if (possibleMove && possibleMove.classList.contains(this.otherPlayer) && jumpMove && !jumpMove.classList.contains("red") && !jumpMove.classList.contains("white")) {
                jumpMove.classList.add("possibleMove");
                // Add possible captures to map
                this.possibleCaptures.set(jumpMove, possibleMove);
            }
            possibleMove = document.getElementById(this.possibleMoves[3]);
            jumpMove = document.getElementById(this.jumpMoves[3]);

            // Add possible moves for jumping pieces
            if (possibleMove && possibleMove.classList.contains(this.otherPlayer) && jumpMove && !jumpMove.classList.contains("red") && !jumpMove.classList.contains("white")) {
                jumpMove.classList.add("possibleMove");
                // Add possible captures to map
                this.possibleCaptures.set(jumpMove, possibleMove);
            }

            // Populate possibleMoves array with elements that contain the class "possibleMove"
            this.possibleMoves = document.getElementsByClassName("possibleMove");
        },
    }
}


</script>

<style scoped>
/* Style for each of the columns on the board */

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

.odd {
    background-color: black;
}

.even {
    background-color: red;
}

.red {

    background-color: red;
    border-radius: 50%;
    scale: 85%;
}

.white {

    background-color: white;
    border-radius: 50%;
    scale: 85%;

}

.king {
    background-image: url("src/assets/checkerKing.png");
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
}

.possibleMove {
    background-color: green;
    border-radius: 50%;
    scale: 25%;
    opacity: 0.5;
}
</style>