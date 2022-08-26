import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Practice from '../views/Practice.vue'
import StorePractice from '../views/StorePractice.vue'
// import MediaDevices from '../views/MediaDevices.vue'

Vue.use(VueRouter)

const routes = [
{
  path : '/',
  name : 'Practice',
  component:Practice
  // component : () => import(/* webpackChunkName: "Practice" */ '../views/Practice.vue')
},
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Privacy.vue')
  },
  {
    path: '/terms',
    name: 'TOS',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Terms.vue')
  },
  {
    path: '/success',
    name: 'Success',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Success.vue')
  },
  {
    path: '/view',
    name: 'ViewVid',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewVid.vue')
  },
  {
    path : '/mediadevices',
    name : 'MediaDevices',
    //component : MediaDevices
    component:()=>import('../views/MediaDevices.vue')
  },
  {
    path : '/storepractice',
    name:'StorePractice',
    component : StorePractice
  }

]

const router = new VueRouter({
  routes
})

export default router
