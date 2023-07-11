<template>
  <h3>Home Page</h3>
  <img alt="Vue logo" src="../assets/logo.png" />
  <div style="height: 400px; width: 500px">
    <Charts
      :options="opt"
      :data="echartData"
      :theme="theme"
      @zr:click="handleZrClick"
      @click="handleClick"
    />
  </div>
</template>
<script lang="ts" setup>
import { Charts } from 'pandora-lib/charts'
import { ref } from 'vue'
let opt: any = {}
const charts: any = ref(null)
const theme: any = ref('dark')
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

const handleZrClick = (...args: [any]) => {
  console.log('click from zrender', ...args)
}

const handleClick = (...args: [any]) => {
  console.log('click from echarts', ...args)
}
</script>
