<template>
  <div class="vpandora-charts-container">
    <div ref="chartRef" class="vpandora-charts"></div>
  </div>
</template>

<script lang="ts">
import { useECharts } from './hooks/useEcharts'
import {
  onMounted,
  ref,
  Ref,
  isRef,
  unref,
  defineComponent,
} from 'vue'
export default defineComponent({
  name: 'Charts',
  props: {
    options: Object,
  },
  setup(props) {
    const chartRef = ref<HTMLDivElement | null>(null)
    const { setOptions } = useECharts(
      chartRef as Ref<HTMLDivElement>
    )
    const opts: any = isRef(props.options)
      ? unref(props.options)
      : props.options
    onMounted(() => {
      setOptions(opts)
    })
    return {
      chartRef,
    }
  },
})
</script>
<style>
.vpandora-charts-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.vpandora-charts {
  width: 100%;
  height: 100%;
}
</style>
