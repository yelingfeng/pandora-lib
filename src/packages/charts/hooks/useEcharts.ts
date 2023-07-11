import { useDebounceFn } from '@vueuse/core'
import { unref, type Ref, nextTick, onUnmounted } from 'vue'
import { type EChartsOption } from 'echarts'
import { isFunction } from 'pandora-lib/utils'
import { useEventListener } from './useEventListener'
import { EventTarget } from '../types'
import echarts from '../plugins'
/**
 *
 * @param elRef
 * @param theme
 * @param eventConfig 事件配置
 * @returns
 */
export function useECharts(
  elRef: Ref<HTMLDivElement>,
  theme = 'default',
  listeners: any
) {
  let chartInstance: any
  let resizeFn: Fn = resize
  let removeResizeFn: Fn = () => {}
  resizeFn = useDebounceFn(resize, 200)
  const timer = null

  function initCharts() {
    const el = unref(elRef)
    if (!el || !unref(el)) {
      return
    }
    chartInstance = echarts.init(el, theme)
    const { removeEvent } = useEventListener({
      el: window,
      name: 'resize',
      listener: resizeFn,
    })
    removeResizeFn = removeEvent
    Object.keys(listeners).forEach((key) => {
      let handler = listeners[key]

      if (!handler) {
        return
      }

      let event = key.toLowerCase()
      if (event.charAt(0) === '~') {
        event = event.substring(1)
        handler.__once__ = true
      }

      let target: EventTarget = chartInstance
      if (event.indexOf('zr:') === 0) {
        target = chartInstance.getZr()
        event = event.substring(3)
      }

      if (handler.__once__) {
        delete handler.__once__
        const raw = handler
        handler = (...args: any[]) => {
          raw(...args)
          target.off(event, handler)
        }
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore EChartsType["on"] is not compatible with ZRenderType["on"]
      // but it's okay here
      target.on(event, handler)
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
