<template>
  <div :class="showAll ? 'links open' : 'links'" id="links">
    <h2 class="links-title">Connected Links</h2>
    <div class="links-container">
      <Preview
        v-for="item in linkToData"
        :key="item.index"
        :title="item.title ? item.title : item.name"
        :model="item.model ? item.model : ''"
        :data="item"
        :onClickData="onClickData"
      />
    </div>
    <div
      :class="this.showAll ? 'links-button hide ' : 'links-button'"
      v-on:click="showMore"
    >
      See more...
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
      showAll: false,
    };
  },
  methods: {
    showMore() {
      this.showAll = true;
    },
    makeLinks: async function () {
      for (let key in this.data) {
        //data {planets: {}}
        let length = this.data[key].length;
        for (let i = 0; i < length; i++) {
          const res = await fetch(this.data[key][i]);
          let data = await res.json();
          this.linkToData.push(data);
        }
      }

      if (this.linkToData.length <= 4) {
        this.showAll = true;
      }
    },
  },
  beforeMount() {
    this.makeLinks();
  },
};
</script>

<style scoped>
.links {
  width: 100%;
  position: relative;
  /* flex-grow: 1; */
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  background-color: #f8f8f8;
  max-height: 214px;
  min-height: 214px;
  overflow: hidden;
}

.links-title {
  font-family: "Star Jedi";
  text-align: center;
  margin: 10px auto;
  width: 50%;
  border-bottom: 2px solid #353d45;
}

.links-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.links-button {
  position: absolute;
  bottom: 0;
  width: 97%;
  background: linear-gradient(transparent, #fff 75%);
  padding: 10px 0;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
}

.open {
  max-height: 100%;
  height: auto;
  min-height: auto;
  overflow: inherit;
}

.hide {
  opacity: 0;
  height: 0;
  display: none;
}

@media screen and (min-width: 1800px) {
  .links {
    max-height: 300px;
    min-height: 300px;
    padding: 20px;
  }
}
</style>
