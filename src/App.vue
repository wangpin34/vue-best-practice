<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, document, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  min-width: 100%;
  max-height: 100%;
  min-height: 100%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  color: #212121;
  background-color: #FAFAFA;
}

ul, ol {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
  margin: 0;
  padding: 0;
}

h1,h2,h3,h4,h5,h6,h7 {
  margin: 0;
  font-weight: normal;
}

label, input, textarea, select, span, a {
  display: inline-block;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: relative;
}

</style>
