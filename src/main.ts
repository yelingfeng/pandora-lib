import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import '@/router/permission'
// load
import { loadSvg } from '@/icons'
import { loadPlugins } from '@/plugins'
import { loadDirectives } from '@/directives'
// css
import 'uno.css'
import 'normalize.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'vxe-table/lib/style.css'
import 'vxe-table-plugin-element/dist/style.css'
import '@/styles/index.scss'

const app = createApp(App)

/** 加载插件 */
loadPlugins(app)
/** 加载全局 SVG */
loadSvg(app)
/** 加载自定义指令 */
loadDirectives(app)

import * as echarts from 'echarts/core'

import {
  BarChart,
  LineChart,
  LinesChart,
  PieChart,
  MapChart,
  PictorialBarChart,
  ScatterChart,
  GraphChart,
  GaugeChart,
  EffectScatterChart,
  RadarChart,
} from 'echarts/charts'
import {
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PolarComponent,
  AriaComponent,
  ParallelComponent,
  VisualMapComponent,
  DataZoomComponent,
  GraphicComponent,
} from 'echarts/components'

import {
  CanvasRenderer,
  SVGRenderer,
} from 'echarts/renderers'
// import 'echarts-wordcloud'
// import 'echarts-liquidfill'

// import chinaData from './geojson/china.json'
// import wuhanData from './geojson/wuhan.json'
// import hubeiData from './geojson/hubei.json'
// import anhuiData from './geojson/anhui.json'
// import shandongData from './geojson/shandong.json'

// echarts.registerMap('china', chinaData)
// echarts.registerMap('wuhan', wuhanData)
// echarts.registerMap('hubei', hubeiData)
// echarts.registerMap('shandong', shandongData)
// echarts.registerMap('anhui', anhuiData)

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PolarComponent,
  AriaComponent,
  ParallelComponent,
  VisualMapComponent,
  DataZoomComponent,
  GraphicComponent,
  LegendComponent,
  BarChart,
  LineChart,
  LinesChart,
  PieChart,
  GraphChart,
  MapChart,
  ScatterChart,
  PictorialBarChart,
  GaugeChart,
  EffectScatterChart,
  RadarChart,
  SVGRenderer,
  CanvasRenderer,
])

app.use(store).use(router)
router.isReady().then(() => {
  app.mount('#app')
})
