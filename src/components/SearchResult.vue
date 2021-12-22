<template>
  <div class="search-result">
    <PreviewSection
      v-if="data.films.length > 0"
      :data="data.films"
      title="films"
      :onClickData="onClickData"
    />
    <PreviewSection
      v-if="data.people.length > 0"
      :data="data.people"
      title="people"
      :onClickData="onClickData"
    />
    <PreviewSection
      v-if="data.planets.length > 0"
      :data="data.planets"
      title="planets"
      :onClickData="onClickData"
    />
    <PreviewSection
      v-if="data.starships.length > 0"
      :data="data.starships"
      title="starships"
      :onClickData="onClickData"
    />
  </div>
</template>

<script>
import PreviewSection from "./PreviewSection";
export default {
  name: "SearchResult",
  props: {
    data: Object,
    onClickData: Function,
  },
  components: {
    PreviewSection,
  },
  beforeMount() {
    // console.log(this.data);
  },
};
</script>

<style scoped>
.search-result {
  width: 100%;
  height: auto;
  min-height: 90px;
  margin: 20px 0 0 0;
  /* flex-grow: 2; */
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
}

.result-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
