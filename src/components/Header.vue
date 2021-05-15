<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/scripty-logo.png">
        </div>

        <div class="search">
            <input class="input" type="text" placeholder="Search..">
        </div>

        <div class="icons">
            <img src="../assets/Navigation/add-icon.svg">
            <img src="../assets/Navigation/bell-icon.svg">
            <img src="../assets/Navigation/avatar-icon.svg">
            <img src="../assets/Navigation/triangle-icon.svg">
        </div>

    </div>
</template>

<style>
*{
    margin: 0;
}
.header{
    background-color:#202020;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.logo{
    max-height: 70%;
    vertical-align: middle;
    background-color:#212121;
}
.search{
    color: white;
    width: 20%;
    display: flex;
    justify-content: center;

}
.input{
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #181818;
}
.icons{
    
}
.icons img{
   width: 20%;
   margin: 2px;
}
</style>

<script>
export default{
    name:"Header"
};
</script>
