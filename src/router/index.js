import Vue from 'vue'
import Router from 'vue-router'
import TeamList from '@/components/TeamList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TeamList',
      component: TeamList
    }
  ]
})
