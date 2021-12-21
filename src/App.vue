<template>
  <div id="app">
    <Navigation />
    <Content />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Content from "./components/Content.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Content,
  },
};
</script>

<style>
@font-face {
  font-family: "Star Jedi";
  src: url("//db.onlinewebfonts.com/t/0c724f6aa457310440cf8949c615cbd7.eot");
  src: url("//db.onlinewebfonts.com/t/0c724f6aa457310440cf8949c615cbd7.eot?#iefix")
      format("embedded-opentype"),
    url("//db.onlinewebfonts.com/t/0c724f6aa457310440cf8949c615cbd7.woff2")
      format("woff2"),
    url("//db.onlinewebfonts.com/t/0c724f6aa457310440cf8949c615cbd7.woff")
      format("woff"),
    url("//db.onlinewebfonts.com/t/0c724f6aa457310440cf8949c615cbd7.ttf")
      format("truetype"),
    url("//db.onlinewebfonts.com/t/0c724f6aa457310440cf8949c615cbd7.svg#Star Jedi")
      format("svg");
}
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap");

body,
html,
h1,
h2,
h3,
p,
li,
ul,
#app {
  margin: 0;
  padding: 0;
}

body,
html,
#app {
  min-height: 100vh;
}

#app {
  font-family: "Montserrat";
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: stretch;
  color: #000;
}
</style>
