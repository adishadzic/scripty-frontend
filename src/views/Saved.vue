<template>
  <div class="saved">
    <h1>Saved</h1>
    <div class="mape">
      <p>Mape</p>
      <button>
        <img src="../assets/newFolder.svg" height="25" />New folder
      </button>
    </div>
    <div class="saved__items">
      <SavedItem :key="folder.id" v-for="folder in folders" :item="folder" />
    </div>
  </div>
</template>

<script>
import SavedItem from "../components/SavedItem.vue";

export default {
  components: {
    SavedItem,
  },
  data: function () {
    return {
      folders: [
        {
          img: require("../assets/folder.svg"),
          folderName: "Statistika",
        },
        {
          img: require("../assets/folder.svg"),
          folderName: "Osnove IKT-a..",
        },
        {
          img: require("../assets/folder.svg"),
          folderName: "Web Aplikacije",
        },
        {
          img: require("../assets/folder.svg"),
          folderName: "Ekonomija",
        },
        {
          img: require("../assets/folder.svg"),
          folderName: "Baze podataka",
        },
        {
          img: require("../assets/folder.svg"),
          folderName: "Baze podataka II",
        },
        {
          img: require("../assets/folder.svg"),
          folderName: "STnZ",
        },
        {
          img: require("../assets/folder.svg"),
          folderName: "Baze podataka II",
        },
        {
          img: require("../assets/folder.svg"),
          folderName: "STnZ",
        },
        {
          img: require("../assets/folder.svg"),
          folderName: "Baze podataka II",
        },
        {
          img: require("../assets/folder.svg"),
          folderName: "STnZ",
        },
        {
          img: require("../assets/folder.svg"),
          folderName: "Baze podataka II",
        },
        {
          img: require("../assets/folder.svg"),
          folderName: "STnZ",
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