import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      name: 'home',
      component: () => import(/*webpackChunkName: "Home"*/'./components/Home.vue')
    },
    {
      path:'/time',
      name: 'time',
      component: r => require.ensure([], function() {
                  r(require('./components/Time.vue'))
                }, 'Head')
    }
  ]
})