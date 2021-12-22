<template>
  <div class="item-info">
    <h2>{{ data.title ? data.title : data.name }}</h2>
    <ul>
      <li v-for="(value, name) in data" :key="value.index">
        <p v-if="!Array.isArray(value)">
          <span>{{ editPropertyName(name) }}</span
          >: {{ value }}
        </p>
      </li>
    </ul>
    <div class="item-info-buttons">
      <button
        v-if="searchResult.films.length > 0"
        v-on:click="() => moveTo('films')"
      >
        Move to films
      </button>
      <button
        v-if="searchResult.people.length > 0"
        v-on:click="() => moveTo('people')"
      >
        Move to people
      </button>
      <button
        v-if="searchResult.planets.length > 0"
        v-on:click="() => moveTo('planets')"
      >
        Move to planets
      </button>
      <button
        v-if="searchResult.starships.length > 0"
        v-on:click="() => moveTo('starships')"
      >
        Move to starships
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemInfo",
  props: ["data", "searchResult"],
  components: {},
  methods: {
    editPropertyName: function (name) {
      let lower = name.toLowerCase();
      let firstLetter = lower.slice(0, 1);
      let capitalized = lower.replace(firstLetter, firstLetter.toUpperCase());
      let addedSpace = capitalized.replaceAll("_", " ");
      return addedSpace;
    },
    moveTo: function (tag) {
      window.scroll({
        top: document.getElementById(tag).offsetTop,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.item-info {
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

.item-info-buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* margin: 20px 0 10px; */
}

.item-info-buttons button {
  padding: 15px 0;
  width: 21%;
  padding: 10px;
  margin: 10px 0;
  font-family: "Montserrat";
  background-color: #353d45;
  color: #fff;
  border-radius: 5px;
  outline: none;
  border: none;
  box-sizing: border-box;
}
.item-info-buttons button:active {
  transform: translateY(1px);
  background-color: #2C313B;
  box-shadow: inset 0 0  5px 5px rgba(0, 0, 0, .2);;
}
</style>
