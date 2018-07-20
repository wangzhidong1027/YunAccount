<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$axios.post(
       this.$GLOBAL.getAllTypeApi,
       this.$qs.stringify({
          catId: '37'
        })
      ).then(res => {
        var result = JSON.parse(this.$base64.decode(res.data))
        if(result.code == 10000) {
         result.data[0].childList
           this.$store.commit('getType', result.data[0].childList)
        }
      }).catch(error => {
          console.log(error)
      })
  },
  mounted() {
  }
}
</script>
<style lang="scss">
body,html{
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
  overflow: hidden;
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
