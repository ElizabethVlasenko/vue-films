<template>
  <div class="search">
    <input class="search-input" value="" placeholder="Search..." />
    <button class="search-button" v-on:click="search">
      <font-awesome-icon icon="search" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {},
  methods: {
    search: function (event) {
      console.log("hello", event);
    },
  },
};
</script>

<style scoped>
.search {
  width: 50%;
  box-sizing: border-box;
}

.search-input {
  outline: none;
  border: none;
  background-color: #2c313b;
  box-sizing: border-box;
  border-radius: 5px 0 0 5px;
  padding: 10px;
  color: #fff;
}

.search-button {
  outline: none;
  border: none;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 0 5px 5px 0;
  padding: 10px;
}
</style>
