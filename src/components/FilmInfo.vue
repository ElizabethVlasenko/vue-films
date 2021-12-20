<template>
  <div class="film-info">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "FilmInfo",
  props: {
    name: String,
  },
};
</script>

<style scoped>
.film-info {
  width: 100%;
  height: 50%;
  margin: 20px 0;
  flex-grow: 2;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  background-color: #f8f8f8;
}
</style>
