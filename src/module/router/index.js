import Vue from 'vue'
import Router from 'vue-router'
import homeSec from '../../components/home/homeSec'

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path:'/home',
      component:homeSec
    }
  ]
})