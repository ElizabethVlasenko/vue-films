<template>
  <div class="preview-section">
    <h2 class="preview-section-title" v-bind:id="title">{{ title }}</h2>
    <div class="preview-section-content">
      <Preview
        v-for="item in data"
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
  name: "PreviewSection",
  props: {
    data: Array,
    title: String,
    onClickData: Function,
  },
  components: {
    Preview,
  },
  mounted() {
    this.$emit('isLoading', false)
  }
};
</script>

<style scoped>
.preview-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.preview-section-title {
  font-family: "Star Jedi";
  text-align: center;
  margin: 10px auto;
  width: 50%;
  border-bottom: 2px solid #353d45;
}

.preview-section-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
