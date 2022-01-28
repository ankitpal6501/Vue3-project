
<template>
  <div id='content' >
  <!-- <router-link to='/'>Home</router-link>
  <router-link to='/about'>About</router-link>
  <router-link to='/sign'>sign</router-link>
  <router-link to='/login'>Login</router-link> -->

  <router-view v-slot="{ Component }">

    <transition name='fade' mode="out-in">

    <component :is="Component"/>

    </transition>
  </router-view>

  </div>
</template>
<script >

</script>
<style>

.fade-enter-from,.fade-leave-to{
  opacity: 0;
}

a{
  font-weight: bold;
  color: blueviolet;
  text-decoration: none;
  margin-right: 1em;

}

.fade-enter-active,.fade-leave-active{
  transition: opacity 1s ease;
}
#content{
  width: 40%;
  min-width: 500px;
  margin: 0 auto;
  position: relative;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
