<template>
  <div class="saved">
    <h1>Fakulteti</h1>
    <div class="mape">
      <p>Mape</p>
      <button>
        <img src="../assets/newFolder.svg" height="25" />New folder
      </button>
    </div>
    <div class="saved__items">
      <MapaFakulteta :key="fakultet.id" v-for="fakultet in fakulteti" :item="fakultet" />
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
          img: require("../assets/folder.svg"),
          fakultetName: "Statistika",
        },
        {
          img: require("../assets/folder.svg"),
          fakultetName: "Osnove IKT-a..",
        },
        {
          img: require("../assets/folder.svg"),
          fakultetName: "Web Aplikacije",
        },
        {
          img: require("../assets/folder.svg"),
          fakultetName: "Ekonomija",
        },
        {
          img: require("../assets/folder.svg"),
          fakultetName: "Baze podataka",
        },
      ],
    };
  },
};
</script>

<style>
.saved {
  font-family: "Open Sans", sans-serif;
  padding-top: 30px;
  margin-left: 17%;
  margin-right: 40px;
}
.mape {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.mape button {
  padding: 10px;
  margin-left: 20px;
  background-color: #f95555;
  border: 0;
  color: white;
  display: flex;
  align-items: center;
  border-radius: 5px;
  font-family: "Open Sans", sans-serif;
}

.mape button img {
  margin-right: 5px;
}

.saved__items {
  display: flex;
  padding-top: 20px;
  flex-wrap: wrap;
}
</style>