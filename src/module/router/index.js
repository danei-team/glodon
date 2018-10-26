import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
<<<<<<< HEAD
import application from '../../components/application/application.vue'
import solution from '../../components/solution/solution.vue'
=======
=======
>>>>>>> d28b9aabc79830a23c44e71da7ddf0f24d4ebb9a
import homeSec from '../../components/home/homeSec'

>>>>>>> d28b9aabc79830a23c44e71da7ddf0f24d4ebb9a
Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path:'/home',
<<<<<<< HEAD
<<<<<<< HEAD
     // component:Headers
    },
    {
      path:'/solution',
      component:solution
    },
    {
      path:'/application',
      component:application
=======
      component:homeSec
>>>>>>> d28b9aabc79830a23c44e71da7ddf0f24d4ebb9a
=======
      component:homeSec
>>>>>>> d28b9aabc79830a23c44e71da7ddf0f24d4ebb9a
    }
  ]
})