<template>
  <div class="my__profile">
    <h1>This is my profile</h1>

    <div class="profileCard">
      <img class="profilePicture" src="../assets/user.png">
      <div class="ime">
        Ime
      </div>
      <div class="prezime">
        Prezime
      </div>
      <div class="email">
        E-mail
      </div>
    </div>
    <p>Uredi osobne podatke</p>
  </div>
</template>

<script>
export default {
  name: "MyProfile",
};
</script>

<style>
@import "../assets/css/MyProfile.css";
</style>