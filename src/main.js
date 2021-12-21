import Vue from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

let data = { searchText: ''};

new Vue({
  el: "#app",
  render: (h) => h(App),
  data: data,
});
