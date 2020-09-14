<template>
  <body style="padding-top:160px;">
    <div id="app">
      <div class="fixed-top navback">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <router-link to="/home" class="navbar-brand" href="#">
              <img id="logo" src="@/assets/logo.png" alt="FASHION RECOMMEND" />
            </router-link>
          </nav>
        </div>
        <div class="line"></div>
        <div class="container ">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <ul class="navbar-nav nav ml-auto">
              <li class="nav-item">
                <router-link to="/item" class="nav-link">單品推薦</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/style" class="nav-link">風格推薦</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/About" class="nav-link">關於我們</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="line"></div>
      </div>
      <router-view />
    </div>
  </body>
</template>

<style>
.line {
  height: 0.5vh;
  background-color: rgb(190, 190, 190);
}

.navback {
  background-color: white;
}

/* .line2 {
  height: 5vh;
  background-color: rgb(255, 255, 255);
} */

#logo {
  width: 400px;
}

#n li {
  margin: 0 15px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
