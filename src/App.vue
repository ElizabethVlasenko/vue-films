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
body,
html,
h1,
h2,
h3,
p,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: stretch;
  color: #000;
}
</style>
