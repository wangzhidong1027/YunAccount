<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background: #f1f1f1;
  min-width: 1200px;
}
.clear:after{
  content: '';
  display: block;
  height: 0;
  overflow: hidden;
  clear: both;
}
*{
  margin: 0;
  padding: 0;
}
  li{
    list-style: none;
  }
</style>
