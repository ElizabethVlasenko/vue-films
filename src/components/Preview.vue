<template>
  <div class="preview" v-on:click="openData">
    <h3>{{ title }}</h3>
    <p>{{ model }}</p>
  </div>
</template>

<script>
export default {
  name: "Preview",
  props: ["title", "model", "data", "onClickData"],
  methods: {
    openData() {
      this.onClickData(this.data);
    },
  },
};
</script>

<style scoped>
.preview {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  /* border: 2px solid #000; */
  width: 21%;
  margin: 10px 0;
  padding: 5px;
  min-height: 80px;
  border-radius: 5px;
  background-color: #e6e6e6;
}

.preview:hover {
  background-color: #353d45;
  color: #fff;
  transition: 0.5s;
  transform: scale(1.2);
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.5);
}
</style>
