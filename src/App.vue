<script setup>
import { RouterLink } from 'vue-router';

RouterLink
</script>

<template>
  <header>
    <nav>
      <router-link v-bind:to="{ name: 'home' }" exact> <img src="..\src\yeoldgameslogo.PNG"/></router-link>
      <router-link v-bind:to="{ name: 'checkers' }">Checkers</router-link>
      <router-link v-bind:to="{ name: 'connect-four' }">Connect Four</router-link>
      <router-link v-bind:to="{ name: 'chess' }">Chess</router-link>
    </nav>
  </header>
  
  <main class="display">
    <router-view></router-view>
  </main>

</template>

<style scoped>

/* this main controls A LOT */
img {
  width: 100%;
  height: 100px;
}

.display {
  display: block;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin: auto;
  
}

header {
  line-height: 1.5;
  display: flex;
  justify-content: left;
  margin-bottom: 5%;
}


nav {
  width: 100%;
  font-size: 1.3rem;
  text-align: left;
  margin-top: 1rem;
  display: flex;
  align-items: center;

}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media () {
  header {
    display: inline-block;
  }


  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
