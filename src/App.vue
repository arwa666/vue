<template>
  <div id="app">
    
    <AppHeader />
   <router-view />
   <!-- <Login /> -->
   <!-- <train  
   header="This information are passed from the parent component"
   text="Vue is very interesting"
   :newHeader= "value"
   theme ="red"
   /> -->
    <Footer />
  </div>
</template>

<script>

import AppHeader from './components/AppHeader'
import Footer from './components/Footer'
// import Login from './components/Login'
// import train from './components/train'
export default {
  name: 'App',
  components: {
      AppHeader,
    
       Footer
      
  }, 
  data(){
   return{
      value:"this is binded Header"
   }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
<!-- 
     Template Refs allow us to store a refrerence to a DOM Element inside a variable
        -->