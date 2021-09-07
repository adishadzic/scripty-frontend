<template>
  <div class="scripts">
    <h3>All scripts</h3>
    <div v-for="script in scripts" :key="script.id">
      <b-card-group deck>
        <ScriptCard :info="script" />
      </b-card-group>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { Posts } from "@/services";
import store from "@/store";
import ScriptCard from "@/components/ScriptCard.vue";
export default {
  name: "scripts",
  data() {
    return {
      store,
      scripts: [],
    };
  },
  watch: {
    "store.searchTerm": _.debounce(function (val) {
      this.fetchPosts(val);
    }, 500),
  },
  created() {
    this.fetchPosts();
  },
  name: "posts",
  methods: {
    async fetchPosts(term) {
      term = term || this.store.searchTerm;
      this.scripts = await Posts.getAllScripts(term);
    },
    gotoDetails(card) {
      this.$router.push({ path: `post/${card.id}` });
    },
  },
  components: {
    ScriptCard,
  },
};
</script>

<style>
@import "../assets/css/Scripts.css";
</style>