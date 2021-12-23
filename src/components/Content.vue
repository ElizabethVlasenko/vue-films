<template>
  <div class="content">
    <Search @dataGeneration="onClickChild" />
    <ItemInfo
      id="info"
      v-bind:class="
        !(Object.keys(this.data.activePost).length > 0) ? 'hide' : ''
      "
      :data="this.data.activePost"
      :searchResult="this.data.search"
    />
    <Links
      v-if="Object.keys(this.data.activePostLinks).length > 0"
      :data="this.data.activePostLinks"
      :onClickData="onClickData"
      :key="this.linksKey"
    />
    <SearchResult :data="data.search" :onClickData="onClickData" />
  </div>
</template>

<script>
import Search from "./Search.vue";
import Links from "./Links.vue";
import ItemInfo from "./ItemInfo.vue";
import SearchResult from "./SearchResult.vue";

export default {
  name: "Content",
  components: {
    Search,
    Links,
    ItemInfo,
    SearchResult,
  },
  props: ["navData"],
  data() {
    return {
      data: {
        search: { films: [], people: [], planets: [], starships: [] },
        activePost: {},
        activePostLinks: {},
        linksKey: 1568,
      },
    };
  },
  watch: {
    navData: function (data) {
      this.onClickData(data);
    },
  },
  methods: {
    onClickChild(value) {
      this.data = { ...this.data, search: { ...value.data } };
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
      this.linksKey = Math.random();
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

.hide {
  opacity: 0;
  height: 0;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 823px) {
  .content {
    width: 100%;
  }
}
</style>
