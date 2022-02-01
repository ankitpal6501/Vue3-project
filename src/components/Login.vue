<template>
    <div class="register">
        <h1>Login</h1>
        <input type="email" v-model="loginData.email" placeholder="Enter the User Name">
        <input type="password" v-model="loginData.password" placeholder="Enter the password">
        <button @click="checkid">Login</button><br><br>
        <router-link to="/sign">create an account</router-link>
        
    </div>
</template>

<script>
import {usedata} from "../store/index"
import { ref } from '@vue/reactivity'

export default {
    setup(){
      const loginData=ref({})
      const store = usedata()
      const{login}= store
       const checkid=()=>{
           
         login(loginData.value)
      }
      return{loginData,checkid}
    }
}
</script>

<style>
.register input{
     width: 300px;
     height: 40px;
     display: block;
     margin-left: auto;
     margin-right: auto;
     margin-bottom: 30px;
     padding-left: 20px;
     border: 1px solid skyblue;
 }
 .register button{
     width: 300px;
     height: 40px;
     background-color: skyblue;
     cursor: pointer;
     color: #fff;
     border: 1px solid skyblue;
 }
</style>