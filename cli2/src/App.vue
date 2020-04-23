<template>
    <div id="app">
        <div class="rem">
            <a href="../static/biaoge.xlsx">sss</a>
        </div>
        <img src="./assets/logo.png">
    <router-view/>
    </div>
</template>

<script>
export default {
    name: "App",
    created: function() {
        console.log(333);
        this.$store.commit("setExaminfo", { ccc: "aaa" });
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 12px;
}
/* .rem {
    height: 32px;
    width: 750px;
    background: red;
} */
* {
    padding: 0;
    margin: 0;
}
</style>
