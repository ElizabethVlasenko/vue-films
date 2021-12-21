<template>
  <div class="content">
    <Search @dataGeneration="onClickChild" />
    <SearchResult :data="data.search" :onClickData="onClickData" />
    <FilmInfo
      v-if="Object.keys(this.data.activePost).length > 0"
      :data="this.data.activePost"
    />
    <Links v-if="Object.keys(this.data.activePost).length > 0" />
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
      },
    };
  },
  methods: {
    onClickChild(value) {
      this.data = { ...this.data, search: { ...value.data } };
    },
    onClickData(data) {
      console.log(this.data);
       this.data = { ...this.data, activePost: { ...data } };
      console.log(this.data);
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
