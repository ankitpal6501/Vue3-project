import { createRouter,createWebHistory } from "vue-router"
import Home from "../components/Home.vue"
import Sign from "../components/Sign.vue"
import Login from "../components/Login.vue"
import About from "../components/About.vue"
import {auth} from "../firebase/index"

const routes=[
    {
        path:'/',
        name:'Home',
        component:Home,
        meta:{
            authregister:true
        }
    },
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'/sign',
        name:'Sign',
        component:Sign
    },
    {
        path:'/about',
        name:'About',
        component:About,
        meta:{
            authregister:true
        }
    },
]

const router=createRouter({
    history: createWebHistory(),
    routes,
})
 router.beforeEach((to,from,next)=>{
     if(to.path=='/login' && auth.currentUser){
         next('/')
         return
     }
     if(to.matched.some(record=>record.meta.authregister) && !auth.currentUser){
        next('/login')
        return
     }
     next()
     
 })
export default router