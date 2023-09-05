<template>
  <div h-full uno-padding-20>
    <el-row :gutter="24">
      <el-col :span="10">
        <el-card
          class="box-card"
          shadow="hover"
          header="属性"
        >
          <el-form :model="form" label-width="150px">
            <!-- <el-form-item label="主题：">
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
                :max="800"
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
              <el-button
                type="primary"
                @click="startActions"
                >开启</el-button
              >
              <el-button type="primary" @click="stopActions"
                >关闭</el-button
              >
            </el-form-item> -->
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="14">
        <el-card
          class="box-card"
          shadow="hover"
          header="基础Charts"
        >
          <div class="box-center">
            <Charts
              ref="charts"
              :options="opt"
              :data="echartData"
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
let opt: any = {}
const charts: any = ref(null)

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

onMounted(() => {})
</script>

<style scoped>
.box-center {
  position: relative;
  width: 600px;
  height: 400px;
}
</style>
