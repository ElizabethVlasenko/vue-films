<template>
  <div class="content">
    <Search />
    <FilmInfo name="Film Name" />
    <Links />
  </div>
</template>

<script>
import Search from "./Search.vue";
import Links from "./Links.vue";
import FilmInfo from "./FilmInfo.vue";

export default {
  name: "Content",
  components: {
    Search,
    Links,
    FilmInfo,
  },
  props: {},
};
</script>

<style scoped>
.content {
  width: 70%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #353d45; /* #F6F6F6;*/
}
</style>
