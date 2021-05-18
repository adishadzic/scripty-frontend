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
          image: require("../assets/folder.svg"),
          fakultetName: "Statistika",
        },
        {
          image: require("../assets/folder.svg"),
          fakultetName: "Osnove IKT-a..",
        },
        {
          image: require("../assets/folder.svg"),
          fakultetName: "Web Aplikacije",
        },
        {
          image: require("../assets/folder.svg"),
          fakultetName: "Ekonomija",
        },
        {
          image: require("../assets/folder.svg"),
          fakultetName: "Baze podataka",
        },
      ],
    };
  },
};
</script>

<style>
.fakulteti {
  font-family: "Open Sans", sans-serif;
  padding-top: 30px;
  margin-left: 17%;
  margin-right: 40px;
}
.mape__fakulteta {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.mape__fakulteta button {
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

.fakultet__items {
  display: flex;
  padding-top: 20px;
  flex-wrap: wrap;
}
</style>