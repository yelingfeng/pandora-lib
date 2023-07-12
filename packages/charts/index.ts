import type { App } from 'vue'
import Charts from './src/index.vue'

Charts.install = (app: App) => {
  app.component(Charts.name, Charts)
}

export { Charts }
export default Charts
