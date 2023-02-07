import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { BackTop, Cell, Button } from 'vant';
import 'vant/es/cell/style';
import 'vant/es/back-top/style';
import 'vant/es/button/style';
import { router, setupRouter } from './router'

(async function() {
  const app = createApp(App)
  setupRouter(app)
  await router.isReady()
  app.use(BackTop).use(Cell).use(Button).mount('#app')
})()
