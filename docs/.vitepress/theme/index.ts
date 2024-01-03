import DefaultTheme from 'vitepress/theme'
import Demo from '../components/Demo.vue'
import DemoWrapper from '../components/DemoWrapper.vue'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import 'pandora-lib/pandora-lib.min.css'
import * as core from 'echarts/core'
import * as renderers from 'echarts/renderers'
import * as charts from 'echarts/charts'
import * as components from 'echarts/components'
import type { Theme } from 'vitepress'

const { use } = core
const { CanvasRenderer } = renderers
const {
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
} = charts
const {
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
} = components

use([
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
  CanvasRenderer,
])
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('Demo', Demo)
    app.component('DemoWrapper', DemoWrapper)
  },
} as Theme
