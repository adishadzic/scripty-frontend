<template>
  <div class="my__profile">
    <h1>Moj profil</h1>

    <div class="profileCard">
      <div class="profileCardElements">
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
      <div class="uredi">
        <p>Uredi osobne podatke</p>
      </div>
    </div>

    <div class="statistike">
      <p>Statistike</p>
    </div>

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