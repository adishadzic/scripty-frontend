<template>
  <div class="scripts">
    <div class="flex_row">
      <h3>All scripts</h3>
      <div class="script_image_background">
        <img src="../assets/sidebar-icons/scripts.svg" />
      </div>
    </div>
    <div
      v-for="script in scripts"
      :key="script.id"
      @click="gotoDetails(script)"
    >
      <b-card-group deck>
        <ScriptCard :info="script" />
      </b-card-group>
    </div>
  </div>
</template>

<script>
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
    "store.searchTerm":
      (function (val) {
        this.fetchPosts(val);
      },
      500),
  },
  created() {
    this.fetchPosts();
  },
  name: "posts",
  methods: {
    async fetchPosts(term) {
      term = term || store.searchTerm;
      this.scripts = await Posts.getAllScripts(term);
    },
    gotoDetails(script) {
      this.$router.push({ path: `script/${script.id}` });
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