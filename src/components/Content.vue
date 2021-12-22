<template>
  <div class="content">
    <Search @dataGeneration="onClickChild" />
    <FilmInfo
      id="info"
      v-if="Object.keys(this.data.activePost).length > 0"
      :data="this.data.activePost"
    />
    <Links
      v-if="Object.keys(this.data.activePostLinks).length > 0"
      :data="this.data.activePostLinks"
      :onClickData="onClickData"
    />
    <SearchResult :data="data.search" :onClickData="onClickData" />
  </div>
</template>

<script>
import Search from "./Search.vue";
import Links from "./Links.vue";
import FilmInfo from "./FilmInfo.vue";
import SearchResult from "./SearchResult.vue";

export default {
  name: "Content",
  components: {
    Search,
    Links,
    FilmInfo,
    SearchResult,
  },
  data() {
    return {
      data: {
        search: { films: [], people: [], planets: [], starships: [] },
        activePost: {},
        activePostLinks: {},
      },
    };
  },
  methods: {
    onClickChild(value) {
      this.data = { ...this.data, search: { ...value.data } };
      console.log("value", value);
    },

    onClickData(data) {
      let links = {};

      for (let key in data) {
        if (Array.isArray(data[key])) {
          links = { ...links, [key]: data[key] };
          delete data[key];
        }
        if (key === "homeworld") {
          links = { ...links, [key]: [data[key]] };
          delete data[key];
        }
      }
      delete data.created;
      delete data.edited;
      delete data.url;

      this.data = { ...this.data, activePost: { ...data } };
      this.data = { ...this.data, activePostLinks: { ...links } };

      // window.scrollTo(0,0);
      // document.getElementById('app').scrollIntoView();
      window.scroll({
        top: document.getElementById("info").offsetTop,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.content {
  width: 70%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #353d45;
}
</style>
