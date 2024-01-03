<template>
  <div h-full uno-padding-20>
    <el-row :gutter="24">
      <el-col :span="12">
        <el-card
          class="box-card"
          shadow="hover"
          header="Pie01"
        >
          <div class="box-center">
            <Charts
              ref="charts"
              :data="echartData"
              chart-type="pie"
              :options="opt"
              sub-chart-type="pie01"
              @zr:click="handleZrClick"
              @click="handleClick"
            />
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card
          class="box-card"
          shadow="hover"
          header="Pie02"
        >
          <div class="box-center">
            <Charts
              ref="charts2"
              :data="echartData2"
              :options="opt"
              chart-type="pie"
              sub-chart-type="pie02"
            />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import { Charts } from 'pandora-lib/charts'
import {
  ref,
  Ref,
  reactive,
  provide,
  computed,
  onBeforeUnmount,
  onMounted,
} from 'vue-demi'
let opt: any = {}
const charts: any = ref(null)
const charts2: any = ref(null)

const form: any = reactive({
  theme: 'ovilia-green',
  autoresize: false,
})

const handleZrClick = (...args: [any]) => {
  console.log('click from zrender', ...args)
}

const handleClick = (...args: [any]) => {
  console.log('click from echarts', ...args)
}

const echartData = [
  {
    name: 'A类',
    value: '3720',
  },
  {
    name: 'B类',
    value: '2920',
  },
  {
    name: 'C类',
    value: '2200',
  },
  {
    name: 'D类',
    value: '1420',
  },
  {
    name: 'E类',
    value: '3200',
  },
  {
    name: 'F类',
    value: '2420',
  },
  {
    name: 'G类',
    value: '2200',
  },
  {
    name: 'H类',
    value: '1420',
  },
  {
    name: 'I类',
    value: '3200',
  },
  {
    name: 'J类',
    value: '2420',
  },
]
// {
//   legend: {
//     type: 'scroll',
//     orient: 'vertical',
//     right: 10,
//     top: 'center',
//     bottom: 20,
//     itemWidth: 8,
//     itemHeight: 8,
//     align: 'left',
//     textStyle: {
//       fontSize: 12,
//       padding: [0, 0, 0, 5],
//       rich: {
//         value: {
//           fontSize: 14,
//           fontWeight: 400,
//         },
//       },
//     },
//     data: ['北京分中心', '辽宁分中心'],
//   },
//   label: {
//     show: true,
//     position: 'center',
//     rich: {
//       a: {
//         fontWeight: 700,
//         fontSize: 22,
//         lineHeight: 20,
//       },
//       b: {
//         fontWeight: 700,
//         fontSize: 16,
//         lineHeight: 24,
//       },
//     },
//   },
//   series: [
//     {
//       name: '',
//       type: 'pie',
//       roseType: false,
//       center: ['35%', '50%'],
//       radius: ['45%', '60%'],
//       avoidLabelOverlap: true,
//       label: {
//         normal: {
//           show: false,
//           position: 'center',
//         },
//         emphasis: {
//           show: true,
//           textStyle: {
//             color: '#333',
//             fontSize: 12,
//           },
//         },
//       },
//       selected: {},
//       data: [
//         {
//           name: '北京分中心',
//           value: 5,
//           itemStyle: {
//             color: {
//               colorStops: [
//                 {
//                   offset: 0,
//                   color: 'rgba(103,200,255,1)',
//                 },
//                 {
//                   offset: 1,
//                   color: 'rgba(103,200,255,0.5)',
//                 },
//               ],
//               x: 1,
//               y: 1,
//               x2: 0,
//               y2: 0,
//               type: 'linear',
//               global: false,
//             },
//           },
//         },
//         {
//           name: '辽宁分中心',
//           value: 16,
//           itemStyle: {
//             color: {
//               colorStops: [
//                 {
//                   offset: 0,
//                   color: 'rgba(255,102,102,1)',
//                 },
//                 {
//                   offset: 1,
//                   color: 'rgba(255,102,102,0.5)',
//                 },
//               ],
//               x: 1,
//               y: 1,
//               x2: 0,
//               y2: 0,
//               type: 'linear',
//               global: false,
//             },
//           },
//         },
//       ],
//     },
//   ],
// }

const echartData2 = [
  { value: '2879', name: '北京分中心' },
  { value: '806', name: '上海分中心' },
  { value: '723', name: '天津分中心' },
  { value: '546', name: '宁夏分中心' },
  { value: '454', name: '青岛分中心' },
  { value: '344', name: '沈阳分中心' },
  { value: '244', name: '新疆分中心' },
]

onMounted(() => {})
</script>

<style scoped>
.box-center {
  position: relative;
  width: 600px;
  height: 400px;
}
</style>
