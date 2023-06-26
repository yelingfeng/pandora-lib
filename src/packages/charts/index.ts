import type { App } from 'vue'
import Charts from './index.vue'

Charts.install = (app: App) => {
  app.component(Charts.name, Charts)
}

export { Charts }
export default Charts
