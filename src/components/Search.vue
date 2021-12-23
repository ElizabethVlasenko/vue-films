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
  props: [ "updateLocalStorage", "storedData" ],
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
      console.log("stored data exist", this.storedData.getItem('https://swapi.dev/api/?search='));

      if (
        this.storedData[
          "https://swapi.dev/api/?search=" + this.data.searchText
        ] != undefined
      ) {
        let storedResults =
          this.storedData[
            "https://swapi.dev/api/?search=" + this.data.searchText
          ];
        this.data = { ...this.data, storedResults };
        console.log("stored data exist in if", this.storedData[
            "https://swapi.dev/api/?search=" + this.data.searchText
          ]);
      } else {
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
        while (dataObj.next != undefined) {
          res = await fetch(dataObj.next);
          dataObj = await res.json();
          for (let i = 0; i < dataObj.results.length; i++) {
            dataResults.push(dataObj.results[i]);
          }
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

        dataResults = [];
        this.data = { ...this.data, data };
        this.updateLocalStorage(
          "https://swapi.dev/api/?search=" + this.data.searchText,
          this.data
        );
      }

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
