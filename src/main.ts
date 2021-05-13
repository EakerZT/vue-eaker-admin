import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import * as ANTDIcon from '@ant-design/icons-vue'
import 'remixicon/fonts/remixicon.css'

const app = createApp(App).use(store).use(router).use(Antd)
const icons: any = ANTDIcon
for (const i in icons) {
  app.component(i, icons[i])
}
app.mount('#app')
