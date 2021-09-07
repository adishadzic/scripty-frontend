<template>
  <div class="scriptdetail">
    <b-jumbotron :header="script.scriptName" :lead="script.university">
      <p>{{ script.scriptContent }}</p>
    </b-jumbotron>
  </div>
</template>

<script>
import { Posts } from "@/services";

export default {
  props: ["id"],
  data() {
    return {
      script: null,
    };
  },
  async mounted() {
    this.script = await Posts.getOneScript(this.id);
  },
  name: "script-detail",
};
</script>

<style>
@import "../assets/css/ScriptDetail.css";
</style>