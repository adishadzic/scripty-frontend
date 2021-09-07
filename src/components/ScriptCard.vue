<template>
  <div>
    <b-card :header="info.scriptName" header-tag="header">
      <b-card-text>{{ info.university }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["info"],
  name: "Scriptcard",
};
</script>