<template>
  <div class="links">
    <div v-for="arr in linkToData" :key="arr.index">
      <Preview
        v-for="item in arr"
        :key="item.index"
        :title="item.title ? item.title : item.name"
        :model="item.model ? item.model : ''"
        :data="item"
        :onClickData="onClickData"
      />
    </div>
  </div>
</template>

<script>
import Preview from "./Preview";

export default {
  name: "links",
  props: ["data", "onClickData"],
  components: {
    Preview,
  },
  data() {
    return {
      linkToData: [],
    };
  },
  methods: {
    getInfo: async function (link) {
      const res = await fetch(link);
      let data = await res.json();

      for (let key in data) {
        if (Array.isArray(data[key])) {
          delete data[key];
        }
      }
      return data;
    },
    makeLinks: function () {
      for (let key in this.data) { //data {planets: {}}
      let length = this.data[key].length;
        for (let i = 0; i < length; i++) {
          console.log(this.getInfo(key[i]));
          this.linkToData.push(this.getInfo(key[i]));
        }
      }
      console.log("makeLinksData", this.data);
    },
  },
  beforeMount() {
    // this.makeLinks();
  },
};
</script>

<style scoped>
.links {
  width: 100%;
  /* flex-grow: 1; */
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  background-color: #f8f8f8;
}
</style>
