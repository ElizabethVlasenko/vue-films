<template>
  <div class="search">
    <input
      class="search-input"
      v-on:input="searchValue"
      placeholder="Search..."
    />
    <button class="search-button" v-on:click="getItemsList">
      <font-awesome-icon icon="search" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {},
  data() {
    return {
      data: { searchText: "" },
    };
  },
  beforeMount() {
    this.getItemsList();
  },
  methods: {
    getItemsList: async function () {
      let dataResults = [];

      //--------------------Films--------------------

      let res = await fetch(
        "https://swapi.dev/api/films/?search=" + this.data.searchText
      );
      let dataObj = await res.json();
      let data = { films: dataObj.results };

      //--------------------People--------------------

      res = await fetch(
        "https://swapi.dev/api/people/?search=" + this.data.searchText
      );
      dataObj = await res.json();
      data = { ...data, people: [...dataObj.results] };

      while (dataObj.next != undefined) {
        res = await fetch(dataObj.next);
        dataObj = await res.json();
        for (let i = 0; i < dataObj.results.length; i++) {
          dataResults.push(dataObj.results[i]);
        }

        data = { ...data, people: dataResults };
      }

      dataResults = [];

      //--------------------Planets--------------------

      res = await fetch(
        "https://swapi.dev/api/planets/?search=" + this.data.searchText
      );
      dataObj = await res.json();
      data = { ...data, planets: [...dataObj.results] };
      console.log("planets", dataObj.next);
      while (dataObj.next != undefined) {
        res = await fetch(dataObj.next);
        dataObj = await res.json();
          console.log("dataObj", dataObj.results);
        for (let i = 0; i < dataObj.results.length; i++) {
          dataResults.push(dataObj.results[i]);

        }
          console.log("dataObj.results[i]", dataResults);
        data = { ...data, planets: dataResults };
      }

      dataResults = [];

      //--------------------Starships--------------------

      res = await fetch(
        "https://swapi.dev/api/starships/?search=" + this.data.searchText
      );
      dataObj = await res.json();
      data = { ...data, starships: [...dataObj.results] };

      while (dataObj.next != undefined) {
        res = await fetch(dataObj.next);
        dataObj = await res.json();
        for (let i = 0; i < dataObj.results.length; i++) {
          dataResults.push(dataObj.results[i]);
        }

        data = { ...data, starships: dataResults };
      }
      console.log("last data", data);
      dataResults = [];

      this.data = { ...this.data, data };
      this.$emit("dataGeneration", this.data);
    },
    searchValue: function (event) {
      if (event.data) {
        this.data = {
          ...this.data,
          searchText: this.data.searchText + event.data,
        };
      } else {
        this.data = {
          ...this.data,
          searchText: this.data.searchText.slice(0, -1),
        };
      }
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
  font-family: "Montserrat";
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
