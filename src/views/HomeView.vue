<template>
    <div class="box">
        <h1>Choose a game to play!</h1>

        <div class="games">
            <RouterLink to="/checkers">
                <img class="checkers" src="../assets/checkers.PNG" alt="checkers" title="Checkers">
            </RouterLink>

            <RouterLink to="/connect-four">
                <img class="connect-four" src="../assets/connect four.PNG" alt="connect-four" title="Connect Four">
            </RouterLink>

            <RouterLink to="/chess">
                <img class="chess" src="../assets/chess.PNG" alt="chess" title="chess">
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.box {
    
    align-content: center;
    align-items: center;
}

h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: white;
    font-size: 2.7rem;
}
h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.games {
    display: flex;
    height: 500px;
    justify-content: center;
    gap: 2rem;
}

.checkers {
    width: fit-content;
    height: 100%;
}

.connect-four {
    height: 100%;
    width: fit-content;
}

.chess {
    width: fit-content;
    height: 100%;
}

</style>