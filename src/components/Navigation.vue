<template>
  <nav>
    <img src="../assets/logo.png" />
    <ul>
      <li
        v-for="item in data.results"
        :key="item.index"
        v-on:click="() => onLinkClick(item)"
      >
        <span>
          {{ item.title }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      data: {},
    };
  },
  beforeMount() {
    this.getFilmsList();
  },
  methods: {
    async getFilmsList() {
      const res = await fetch("https://swapi.dev/api/films/");
      const data = await res.json();
      this.data = data;
    },
    onLinkClick(item) {
      this.$emit("linkClick", item);
    },
  },
};
</script>

<style scoped>
nav {
  width: 30%;
  box-sizing: border-box;
  background-color: #2c313b;
  color: #fff;
  font-family: "Star Jedi";
}

img {
  width: 40%;
  height: auto;
  margin: 20px auto;
  display: block;
}

li {
  list-style: none;
  padding: 10px 20px;
  cursor: pointer;
  box-sizing: border-box;
}

li:hover {
  background-color: #f8f8f8;
  color: #000;
}

@media screen and (max-width: 823px) {
  li {
    border-bottom: 1px solid #fff;
  }

  img {
    width: 25vw;
    max-width: 160px;
  }

  nav {
    width: 100%;
  }
}
</style>
