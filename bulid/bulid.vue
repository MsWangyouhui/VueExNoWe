
<script>
    export default {
        el: "#Controller",
        data() {
            return {
                name: "guowenfh",
                age: "21"
            }
        }
    }
</script>
<template>
    <div>
        <h1>姓名：{{name}}</h1>
        <h2>{{age}}</h2>
    </div>
</template>
<style>
    body {
        background-color: yellow;
        h1{
            background-color: #eee;
            color: red;
            transform: translate(10%, 10%);
            transition: all 0.5s easy;
        }
        h1:hover {
            height: 100px;
        }
        h2 {
            background-color: #999;
        }
    }
</style>
