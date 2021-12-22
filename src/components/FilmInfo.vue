<template>
  <div class="film-info">
    <h2>{{ data.title ? data.title : data.name }}</h2>
    <ul>
      <li v-for="(value, name) in data" :key="value.index">
        <p v-if="!Array.isArray(value)">
          <span>{{ editPropertyName(name) }}</span
          >: {{ value }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FilmInfo",
  props: ["data"],
  components: {},
  methods: {
    editPropertyName: function (name) {
      let lower = name.toLowerCase();
      let firstLetter = lower.slice(0, 1);
      let capitalized = lower.replace(firstLetter, firstLetter.toUpperCase());
      let addedSpace = capitalized.replaceAll("_", " ");
      return addedSpace;
    },
  },
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
}

li {
  list-style: none;
}

h2 {
  font-family: "Star Jedi";
  text-align: center;
  margin: 0 0 20px;
}

p span {
  font-weight: bold;
}
</style>
