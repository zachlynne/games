<template>
    <div>
        <h1>Home</h1>
        <h2>Choose a game to play!</h2>

        <div class="games">
            <RouterLink to="/checkers">
                <img class="checkers" src="../assets/checkers.PNG" alt="checkers" title="Checkers">
            </RouterLink>

            <RouterLink to="/connect-four">
                <img class="connect-four" src="../assets/connect four.PNG" alt="connect-four" title="Connect Four">
            </RouterLink>

            <RouterLink to="/chess">
                <img class="connect-four" src="../assets/chess.PNG" alt="chess" title="chess">
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
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

    height: 100%;
}

.connect-four {
    height: 100%;
    
}

</style>