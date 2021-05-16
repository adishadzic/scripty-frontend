<template>
  <div class="header">
    <div class="header__left">
      <img
        src="../assets/logo.svg"
        height="35vh"
        style="margin-right: 5px"
      />Scripty
    </div>

    <div class="header__input">
      <input type="text" placeholder="Search.." />
      <button type="submit"><i class="fa fa-search"></i></button>
    </div>

    <div class="header__icons">
      <img class="header__icon" src="../assets/Navigation/plus-icon.svg" />
      <img class="header__icon" src="../assets/Navigation/bell-icon.svg" />
      <img class="header__icon" src="../assets/Navigation/avatar-icon.svg" />
      <img
        class="header__icon-last"
        src="../assets/Navigation/triangle-icon.svg"
      />
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@700&display=swap");

.header {
  background-color: #202020;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  padding-right: 20px;
  padding-left: 20px;
  top: 0;
}
.header__left {
  padding: 1%;
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-size: 30px;
  font-family: "Source Code Pro", monospace;
  color: rgb(231, 92, 92);
}
.header__input {
  display: flex;
  align-items: center;
  width: 35%;
  border: 1px solid darkgray;
}
.header__input input {
  width: 100%;
  background-color: #181818;
  padding: 8px;
  border: 0;
  color: white;
}
.header__input button {
  float: left;
  width: 20%;
  padding: 5px;
  background: gray;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
}

.header__input button:hover {
  background: lightgray;
  color: gray;
}

.header__icons {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.header__icon {
  margin-left: 15px;
  height: 25px;
}

.header__icon-last {
  margin-left: 6px;
  height: 7px;
}
</style>

<script>
export default {
  name: "Header",
};
</script>
