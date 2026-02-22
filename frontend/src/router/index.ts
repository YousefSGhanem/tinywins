import {createRouter, createWebHistory} from 'vue-router'
import MemberView from '../views/MembersView.vue'

const routes = [
  {
    path: '/',
    redirect: '/members'
  },
  {
    path: '/members',
    name: 'members',
    component: MemberView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
