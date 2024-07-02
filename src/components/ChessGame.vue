<template>
    <header>
        <h1>Chess</h1>
        <!-- make statements for whose turn it is and winner / tie -->
    </header>
    <main>
        <!-- board assignment coinsides with A to H and 1 to 8 for referencing moves -->
        <div class="board">
        
        <div
            v-for="piece in whitePieces"
            :key="piece.position.charAt(0) + piece.position.charAt(1)"
        >
        <img :src="piece.image" />
        </div>
          
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
    
    data () {
        return {

            whitePieces: [
                {    
                    type: 'pawn',
                    position: 'a2',
                    playerOwned: 'white',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/whitePawn.png')
                },
                {    
                    type: 'pawn',
                    position: 'b2',
                    playerOwned: 'white',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/whitePawn.png')
                },
                {    
                    type: 'pawn',
                    position: 'c2',
                    playerOwned: 'white',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/whitePawn.png')
                },
                {    
                    type: 'pawn',
                    position: 'd2',
                    playerOwned: 'white',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/whitePawn.png')
                },
                {    
                    type: 'pawn',
                    position: 'e2',
                    playerOwned: 'white',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/whitePawn.png')
                },
                {    
                    type: 'pawn',
                    position: 'f2',
                    playerOwned: 'white',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/whitePawn.png')
                },
                {    
                    type: 'pawn',
                    position: 'g2',
                    playerOwned: 'white',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/whitePawn.png')
                },
                {    
                    type: 'pawn',
                    position: 'h2',
                    playerOwned: 'white',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/whitePawn.png')
                },

                {    
                    type: 'rook',
                    position: 'a1',
                    playerOwned: 'white',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/whiteRook.png')
                },
                {    
                    type: 'rook',
                    position: 'h1',
                    playerOwned: 'white',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/whiteRook.png')
                },

                {    
                    type: 'bishop',
                    position: 'b1',
                    playerOwned: 'white',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/whiteBishop.png')
                },
                {    
                    type: 'bishop',
                    position: 'g1',
                    playerOwned: 'white',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/whiteBishop.png')
                },

                {    
                    type: 'knight',
                    position: 'c1',
                    playerOwned: 'white',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/whiteKnight.png')
                },
                {    
                    type: 'knight',
                    position: 'f1',
                    playerOwned: 'white',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/whiteKnight.png')
                },

                {    
                    type: 'king',
                    position: 'e1',
                    playerOwned: 'white',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/whiteKing.png')
                },

                {    
                    type: 'queen',
                    position: 'd1',
                    playerOwned: 'white',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/whiteQueen.png')
                },
            ],

            blackPieces: [
                {    
                    type: 'pawn',
                    position: 'a7',
                    playerOwned: 'black',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/blackPawn.png')
                },
                {    
                    type: 'pawn',
                    position: 'b7',
                    playerOwned: 'black',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/blackPawn.png')
                },
                {    
                    type: 'pawn',
                    position: 'c7',
                    playerOwned: 'black',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/blackPawn.png')
                },
                {    
                    type: 'pawn',
                    position: 'd7',
                    playerOwned: 'black',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/blackPawn.png')
                },
                {    
                    type: 'pawn',
                    position: 'e7',
                    playerOwned: 'black',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/blackPawn.png')
                },
                {    
                    type: 'pawn',
                    position: 'f7',
                    playerOwned: 'black',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/blackPawn.png')
                },
                {    
                    type: 'pawn',
                    position: 'g7',
                    playerOwned: 'black',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/blackPawn.png')
                },
                {    
                    type: 'pawn',
                    position: 'h7',
                    playerOwned: 'black',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/blackPawn.png')
                },

                {    
                    type: 'rook',
                    position: 'a8',
                    playerOwned: 'black',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/blackRook.png')
                },
                {    
                    type: 'rook',
                    position: 'h8',
                    playerOwned: 'black',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/blackRook.png')
                },

                {    
                    type: 'bishop',
                    position: 'b8',
                    playerOwned: 'black',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/blackBishop.png')
                },
                {    
                    type: 'bishop',
                    position: 'g8',
                    playerOwned: 'black',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/blackBishop.png')
                },

                {    
                    type: 'knight',
                    position: 'c8',
                    playerOwned: 'black',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/blackKnight.png')
                },
                {    
                    type: 'knight',
                    position: 'f8',
                    playerOwned: 'black',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/blackKnight.png')
                },

                {    
                    type: 'king',
                    position: 'e8',
                    playerOwned: 'black',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/blackKing.png')
                },

                {    
                    type: 'queen',
                    position: 'd8',
                    playerOwned: 'black',
                    possibleMoves: null,
                    isCaptured: false,
                    hasMoved: false,
                    image: ('src/assets/blackQueen.png')
                },
            ]

        }
    },

    methods: {
        handleClick() {

        }
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

.even {
    background-color: black;
}

.odd {
    background-color: white;
}

.possibleMove {
    background-color: green;
    border-radius: 50%;
    scale: 25%;
    opacity: 0.5;
}
</style>