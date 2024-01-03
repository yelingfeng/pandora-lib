<template>
  <div class="demo-charts">
    <Charts
      ref="charts"
      :data="echartData"
      :options="opt"
      chart-type="pie"
      sub-chart-type="pie02"
    />
  </div>
</template>

<script lang="ts">
export default { name: 'ChartsDemo', title: 'Pie02' }
</script>
<script setup lang="ts">
import Charts from 'pandora-lib/charts'
import { ref } from 'vue'
let opt: any = {}
const charts: any = ref(null)
const theme: any = ref('dark')
const echartData = [
  { value: '2879', name: '北京分中心' },
  { value: '806', name: '上海分中心' },
  { value: '723', name: '天津分中心' },
  { value: '546', name: '宁夏分中心' },
  { value: '454', name: '青岛分中心' },
  { value: '344', name: '沈阳分中心' },
  { value: '244', name: '新疆分中心' },
]

const handleZrClick = (...args: [any]) => {
  console.log('click from zrender', ...args)
}

const handleClick = (...args: [any]) => {
  console.log('click from echarts', ...args)
}
</script>
