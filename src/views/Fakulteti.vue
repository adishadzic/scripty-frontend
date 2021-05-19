<template>
  <div class="fakulteti">
    <h1>Fakulteti</h1>
    <div class="mape__fakulteta">
      <p>Mape</p>
      <button>
        <img src="../assets/newFolder.svg" height="25" />New folder
      </button>
    </div>
    <div class="fakultet__items">
      <MapaFakulteta
        :key="fakultet.url"
        v-for="fakultet in fakulteti"
        :data="fakultet"
      />
    </div>
  </div>
</template>

<script>
import MapaFakulteta from "../components/MapaFakulteta.vue";

export default {
  components: {
    MapaFakulteta,
  },
  data: function () {
    return {
      fakulteti: [
        {
          image: require("../assets/college.svg"),
          fakultetName: "Fakultet Informatike u Puli",
          uni: "Sveučilište Jurja Dobrile u Puli",
        },
        {
          image: require("../assets/college.svg"),
          fakultetName: "Fakultet Informatike u Puli",
          uni: "Sveučilište Jurja Dobrile u Puli",
        },
        {
          image: require("../assets/college.svg"),
          fakultetName: "Fakultet Informatike u Puli",
          uni: "Sveučilište Jurja Dobrile u Puli",
        },
        {
          image: require("../assets/college.svg"),
          fakultetName: "Fakultet Informatike u Puli",
          uni: "Sveučilište Jurja Dobrile u Puli",
        },
        {
          image: require("../assets/college.svg"),
          fakultetName: "Fakultet Informatike u Puli",
          uni: "Sveučilište Jurja Dobrile u Puli",
        },
        {
          image: require("../assets/college.svg"),
          fakultetName: "Fakultet Informatike u Puli",
          uni: "Sveučilište Jurja Dobrile u Puli",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "../assets/css/Fakulteti.css";
</style>