<template>
  <div class="links">
    <h3>title</h3>
  </div>
</template>

<script>
export default {
  name: "links",
  props: [
    'title'
    
  ],
};
</script>

<style scoped>
.links {
  width: 100%;
  /* flex-grow: 1; */
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  background-color: #f8f8f8;
}
</style>
