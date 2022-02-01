<template>
  <div class="register">
        
       <h1>Sign Up</h1>  
       <input type="text" v-model="details.name" placeholder="Enter the Name">
       <input type="text" v-model="details.phone" placeholder="Enter the phone number">
       <input type="email" v-model="details.email" placeholder="Enter the Email">
       <input type="password" v-model="details.password" placeholder="Enter the password">
       
       <button v-on:click='dataAdd'>SignIn</button><br><br>
       <router-link to= "/login">already have an account</router-link>
    </div>
</template>

<script>
import {usedata} from "../store/index"
import { ref } from '@vue/reactivity'
export default {
   setup(){
    const details=ref({})
    const store=usedata()
    const{sign}=store
    const dataAdd=()=>{
        sign(details.value)
        
    }
    return{details,dataAdd}
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