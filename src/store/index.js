import {defineStore} from "pinia"
import router from "../router/Routes"
import {auth} from "../firebase/index"
import { createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword } from "firebase/auth"


export const usedata= defineStore('unique',{
    state(){
        return{
            user:null
        }
    },
   
   
    actions:{
        clearUser () {
            this.$reset()
          },
        setUser(details){
            this.user=details
           },
        async login(data){
            const {email,password}=data
            try{
                console.log(email,password)
                await signInWithEmailAndPassword(auth,email,password)
            }
            catch (error){
                switch(error.code){
                    case 'auth/invalid-email':
                        alert("Invalid email")
                        break
                    case 'auth/user-not-found':
                        alert("User not found")
                        break
                    case 'auth/wrong-password':
                        alert("wrong password")
                        break
                    default:
                        alert("something went wrong")
                }
                return
            }
            this.setUser(auth.currentUser)
             router.push('/')
        },
        async sign(data){
            const {email,password}=data
            try{
                await createUserWithEmailAndPassword(auth,email,password)
            }
            catch (error){
                switch(error.code){
                    case 'auth/email-already-in-use':
                        alert("email already in use")
                        break
                    case 'auth/invalid-email':
                        alert("Invalid email")
                        break
                    case 'auth/operation-not-allowed':
                        alert("operation not allowed")
                        break
                    case 'auth/weak-password':
                        alert("weak password")
                        break
                    default:
                        alert("something went wrong")
                }
                return
            }
            this.setUser(auth.currentUser);
             router.push('/login')
        },
        async logout(){
            await signOut(auth)
            this.clearUser()   
            router.push('/login')         
        },
        fetch(){
            auth.onAuthStateChanged(async(user)=>{
                if(user===null){
                    this.clearUser()
                }else{
                    this.setUser(user)
                    if(router.isReady() && router.currentRoute.value.path==='/login'){
                        router.push('/')
                    }
                }
  
            })
        }
    }
})
