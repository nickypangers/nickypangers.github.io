<template>
  <div class="container">
    <div id="nav">
      <div class="d-flex justify-content-between">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/resume">Resume</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap");

* {
  background-color: #222733;
}

#app {
  font-family: "Inconsolata", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: #dbe8d4;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 34px;
}

p {
  font-size: 18px;
}

#nav {
  padding: 30px 0;
}

#nav a {
  font-weight: bold;
  color: #dbe8d4;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
