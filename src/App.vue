<template>
  <div id="app">
    
    <HelloWorld msg="OSIKAN WEBSITE COMING SOON"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-color: yellow;
  padding-top: 20px;
  padding-bottom:20px;
}
</style>
