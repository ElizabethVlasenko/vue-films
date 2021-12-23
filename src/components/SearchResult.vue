<template>
  <div class="search-result">
    <div :class="!this.isLoading ? 'search-loader hide' : 'search-loader'">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <PreviewSection
      v-if="data.films.length > 0"
      :data="data.films"
      title="films"
      :onClickData="onClickData"
      @isLoading="loadFinished"
    />
    <PreviewSection
      v-if="data.people.length > 0"
      :data="data.people"
      title="people"
      :onClickData="onClickData"
      @isLoading="loadFinished"
    />
    <PreviewSection
      v-if="data.planets.length > 0"
      :data="data.planets"
      title="planets"
      :onClickData="onClickData"
      @isLoading="loadFinished"
    />
    <PreviewSection
      v-if="data.starships.length > 0"
      :data="data.starships"
      title="starships"
      :onClickData="onClickData"
      @isLoading="loadFinished"
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
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    loadFinished() {
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.search-result {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 85vh;
  margin: 20px 0 0 0;
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

.search-loader {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hide {
  display: none;
}
/* ------------------------------loader------------------------------ */
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #2c313b;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
