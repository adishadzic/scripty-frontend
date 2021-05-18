<template>
  <div class="header">
    <div class="header__input">
      <input type="text" placeholder="Pretraži.." />
      <button type="submit"><i class="fa fa-search"></i></button>
    </div>

    <div class="header__icons">
      <img class="header__icon" src="../assets/Navigation/plus-icon.svg" />
      <img
        class="header__icon"
        src="../assets/Navigation/bell-icon.svg"
        style="height: 33px; margin-right: 2px"
      />
      <span class="badge">3</span>
      <img class="header__icon" src="../assets/Navigation/avatar-icon.svg" />
      <img
        class="header__icon-last"
        src="../assets/Navigation/triangle-icon.svg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@700&display=swap");

.header {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  padding-top: 25px;
  margin-left: 17%;
}

.header__input {
  display: flex;
  align-items: center;
  width: 25%;
}
.header__input input {
  width: 100%;
  background-color: #f2f2f2;
  padding: 10px;
  border: 0;
  color: black;
  border-radius: 5px;
  font-family: "Open Sans", sans-serif;
}
.header__input button {
  float: left;
  width: 20%;
  margin-left: -10px;
  padding: 8px;
  background: #f95555;
  color: white;
  font-size: 17px;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
}

.header__input button:hover {
  color: black;
}

.header__icons {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-right: 20px;
}

.header__icon {
  margin-left: 15px;
  height: 30px;
}

.header__icons .badge {
  position: absolute;
  top: 20px;
  right: 97px;
  padding: 2px 6px;
  border-radius: 50%;
  background: red;
  color: white;
  font-weight: bold;
}

.header__icon-last {
  margin-left: 6px;
  height: 7px;
}
</style>
