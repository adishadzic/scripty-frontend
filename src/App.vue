<template>
    <div class="App">
        <Header/>
        <Navigation/>
    </div>
</template>

<style scoped>
.App{
    background-color: #181818;
}
</style>

<script>
import Header from "./components/Header";
import Navigation from "./components/Navigation"
export default{
    components:{Header, Navigation}
};
</script>
