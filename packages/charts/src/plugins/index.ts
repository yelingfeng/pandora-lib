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

export default echarts
