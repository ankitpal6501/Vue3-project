<template>
<div v-if="user">
   <router-link to="/">Home</router-link>
   <router-link to="/about">About</router-link>
   <button @click="empty">Logout</button>
  <h3>Welcome to the home page</h3>
  </div>
</template>
<script>
import { onBeforeMount, toRef } from '@vue/runtime-core'
import { usedata } from "../store/index"
export default{
    name:'Home',
    setup(){
      const{user}=toRef (usedata())
      const{fetch}=usedata()
      const{logout}=usedata()
       onBeforeMount(()=>{
        fetch()
      }) 
      const empty=()=>{
          logout()
      }
      return{empty,user}
    }
 
}
</script>
<style scoped>
button{
  cursor: pointer;
  border-style: none;
  font-weight: bold;
  color: blueviolet;
  text-decoration: none;
  margin-right: 1em;
  background-color: white;

}
</style>