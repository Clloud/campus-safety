import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main'
import Search from '@/views/search'
import List from '@/views/list'
import Chart from '@/views/chart'
import Map from '@/views/map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'Main',
      component: Main
    },
    {
      path: '/search',
      components: {
        'search': Search,
        'result': List
      }
    },
    {
      path: '/search/chart',
      components: {
        'search': Search,
        'result': Chart
      }
    },
    {
      path: '/search/map',
      components: {
        'search': Search,
        'result': Map
      }
    },
  ]
})
