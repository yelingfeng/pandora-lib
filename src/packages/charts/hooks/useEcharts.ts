import { useDebounceFn } from '@vueuse/core'
import { unref, type Ref, nextTick, onUnmounted } from 'vue'
import { type EChartsOption } from 'echarts'
import { isFunction } from 'pandora-lib/utils'
import { useEventListener } from './useEventListener'
import echarts from '../plugins'
/**
 *
 * @param elRef
 * @param chartKey
 * @param eventConfig 事件配置
 * @returns
 */
export function useECharts(
  elRef: Ref<HTMLDivElement>,
  chartKey = 'default',
  eventConfig: any = {}
) {
  let chartInstance: echarts.ECharts | null = null
  let resizeFn: Fn = resize
  let removeResizeFn: Fn = () => {}
  resizeFn = useDebounceFn(resize, 200)
  const timer = null

  function initCharts() {
    const el = unref(elRef)
    if (!el || !unref(el)) {
      return
    }

    chartInstance = echarts.init(el)
    const { removeEvent } = useEventListener({
      el: window,
      name: 'resize',
      listener: resizeFn,
    })
    removeResizeFn = removeEvent
    bindClickEvent()
  }

  function bindClickEvent() {
    chartInstance?.on('click', (param: any) => {
      if (
        eventConfig.clickHandler &&
        isFunction(eventConfig.clickHandler)
      ) {
        eventConfig.clickHandler(param)
      }
    })
  }

  function setOptions(
    options: EChartsOption,
    clear = true
  ) {
    nextTick(() => {
      if (chartInstance == null) {
        initCharts()
        if (!chartInstance) return
      }
      clear && chartInstance?.clear()
      chartInstance?.setOption(options, true)
    })
  }
  function getOptions() {
    if (chartInstance == null) return
    return chartInstance?.getOption()
  }

  function resize() {
    chartInstance?.resize()
  }

  onUnmounted(() => {
    if (chartInstance == null) return
    removeResizeFn()
    chartInstance.dispose()
    chartInstance = null
  })

  const getPosByGeo = (geo: any) => {
    return chartInstance?.convertToPixel('geo', geo)
  }

  const setShowTip = (index: number) => {
    chartInstance?.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      name: 'group',
      dataIndex: index,
    })
  }
  return {
    setOptions,
    getOptions,
    resize,
    getPosByGeo,
    echarts,
    setShowTip,
  }
}
