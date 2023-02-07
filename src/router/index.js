import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: '/',
    component: () => import('../views/home-page.vue'),
    name: 'HomePage'
  },
  {
    path: '/children',
    component: () => import('../views/children.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

export function setupRouter(app) {
  app.use(router)
}