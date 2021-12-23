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
        top: document.getElementById(tag).getBoundingClientRect().y,
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
  padding: 10px 20px;
  background-color: #f8f8f8;
  line-height: 25px;
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
}

.item-info-buttons button {
  padding: 15px 10px;
  width: 21%;
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
  background-color: #2c313b;
  box-shadow: inset 0 0 5px 5px rgba(0, 0, 0, 0.2);
}

@media screen and (min-width: 1800px) {
  .item-info {
    padding: 20px 40px;
    line-height: 40px;
  }

  .item-info-buttons button {
    padding: 15px 0;
    margin: 25px 0 10px 0;
    font-size: 20px;
  }
}

@media screen and (max-width: 1040px) {
  .item-info-buttons button {
    padding: 15px 25px;
  }
}

@media screen and (max-width: 823px) {
  .item-info-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .item-info-buttons button {
    padding: 15px 10px;
    width: 40%;
  }
}

@media screen and (max-width: 500px) {
  .item-info-buttons button {
    padding: 10px 5px;
    width: 100%;
    margin: 5px 0;
  }
}

@media screen and (max-width: 320px) {
  .item-info-buttons button {
    font-size: 10px;
  }
}
</style>
