<template>
  <div class="vpandora-charts-container">
    <div ref="chartRef" class="vpandora-charts"></div>
  </div>
</template>

<script lang="ts">
import { useECharts } from './hooks/useEcharts'
import { build } from './utils/core'
import {
  onMounted,
  ref,
  Ref,
  isRef,
  unref,
  watch,
  PropType,
  toRefs,
  defineComponent,
} from 'vue'
export default defineComponent({
  name: 'Charts',
  props: {
    data: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    options: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const chartRef = ref<HTMLDivElement | null>(null)
    const { data, options } = toRefs(props)
    const { setOptions } = useECharts(
      chartRef as Ref<HTMLDivElement>
    )
    onMounted(() => {
      setOptions(build(data.value))
    })

    watch(data, function (newval, oldval) {
      //if (newval && newval.length) {
      setOptions(build(newval))
      //}
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
