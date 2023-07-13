<template>
  <div h-full uno-padding-20>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-form :model="form" label-width="150px">
          <el-form-item label="主题：">
            <el-radio-group v-model="form.theme">
              <el-radio-button
                v-for="item in themeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="autoresize">
            <el-switch v-model="form.autoresize" />
          </el-form-item>
          <el-form-item label="变化width">
            <el-slider
              v-model="_width"
              :max="600"
              :min="400"
            />
          </el-form-item>
          <el-form-item label="开启loading">
            <el-button
              :disabled="Loading"
              @click="loadingRefresh"
              >点我</el-button
            >
          </el-form-item>
          <el-form-item label="轮播">
            <el-button type="primary" @click="startActions"
              >开启</el-button
            >
            <el-button type="primary" @click="stopActions"
              >关闭</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="16">
        <el-card
          class="box-card"
          shadow="hover"
          header="基础Charts"
        >
          <div class="box-center" :style="boxCenterStyle">
            <Charts
              ref="charts"
              :options="opt"
              :data="echartData"
              :theme="form.theme"
              :loading="Loading"
              :loading-options="LoadingOptions"
              :autoresize="form.autoresize"
              @zr:click="handleZrClick"
              @click="handleClick"
            />
          </div> </el-card
      ></el-col>
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
import { registerTheme } from 'echarts/core'
import themeJson from './theme1.json'
import themeJson2 from './theme2.json'
let opt: any = {}
const charts: any = ref(null)

const form: any = reactive({
  theme: 'ovilia-green',
  autoresize: false,
})

const _width = ref(400)
const _height = ref(500)
const boxCenterStyle = computed(() => {
  return {
    width: _width.value + 'px',
    height: _height.value + 'px',
  }
})

const Loading = ref(false)
const LoadingOptions = ref({
  text: 'Loading…',
  color: '#4ea397',
  maskColor: 'rgba(255, 255, 255, 0.4)',
})

const theme: any = ref('ovilia-green')
const themeOptions = ref([
  { value: 'ovilia-green', label: 'ovilia-green' },
  { value: 'null', label: 'default' },
  { value: 'dark', label: 'dark' },
  { value: 'dark2', label: 'dark2' },
])

registerTheme('ovilia-green', themeJson)
registerTheme('dark2', themeJson2)

const handleZrClick = (...args: [any]) => {
  console.log('click from zrender', ...args)
}

const handleClick = (...args: [any]) => {
  console.log('click from echarts', ...args)
}

let seconds = 0

const loadingRefresh = (val: any) => {
  seconds = 3
  Loading.value = true
  const timer = setInterval(() => {
    seconds--
    if (seconds === 0) {
      clearTimeout(timer)
      Loading.value = false
    }
  }, 1000)
}

let actionTimer: any = 0
const startActions = () => {
  let dataIndex = -1
  const curChart = charts.value

  if (!curChart) {
    return
  }

  const dataLen = echartData.length
  actionTimer = setInterval(() => {
    curChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex,
    })
    dataIndex = (dataIndex + 1) % dataLen
    curChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex,
    })
    // 显示 tooltip
    curChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex,
    })
  }, 1000)
}
const stopActions = () => {
  clearInterval(actionTimer)
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

onMounted(() => {})

onBeforeUnmount(() => {
  stopActions()
})
</script>

<style scoped>
.box-center {
  position: relative;
}
</style>
