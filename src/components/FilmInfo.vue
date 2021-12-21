<template>
  <div class="film-info">
    {{data}}
  </div>
</template>

<script>
export default {
  name: "FilmInfo",
  props: ['data'],
  components: {

  }
};
</script>

<style scoped>
.film-info {
  width: 100%;
  height: auto;
  margin: 20px 0;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  background-color: #f8f8f8;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
