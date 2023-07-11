<template>
  <div class="vpandora-charts-container">
    <div ref="chartRef" class="vpandora-charts"></div>
  </div>
</template>

<script lang="ts">
import { useECharts } from './hooks/useEcharts'
import { build } from './utils/core'
import type {
  EChartsType,
  EventTarget,
  ChartsOption,
  Theme,
  ThemeInjection,
  InitOptions,
  InitOptionsInjection,
  UpdateOptions,
  UpdateOptionsInjection,
  Emits,
} from './types'
import { omitOn, unwrapInjected } from './utils'
import {
  onMounted,
  ref,
  Ref,
  inject,
  computed,
  watch,
  toRefs,
  defineComponent,
  getCurrentInstance,
  type PropType,
  type InjectionKey,
} from 'vue-demi'

export const THEME_KEY =
  'ecTheme' as unknown as InjectionKey<ThemeInjection>
export const INIT_OPTIONS_KEY =
  'ecInitOptions' as unknown as InjectionKey<InitOptionsInjection>
export const UPDATE_OPTIONS_KEY =
  'ecUpdateOptions' as unknown as InjectionKey<UpdateOptionsInjection>

export default defineComponent({
  name: 'Charts',
  inheritAttrs: false,
  props: {
    data: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    theme: {
      type: [Object, String] as PropType<Theme>,
      default: () => null,
    },
    options: {
      type: Object as PropType<ChartsOption>,
      default: () => {},
    },
  },
  emits: {} as unknown as Emits,
  setup(props, { attrs }) {
    const chartRef = ref<HTMLDivElement | null>(null)
    const { data, options } = toRefs(props)

    const defaultTheme = inject(THEME_KEY, null)

    const realTheme = computed(
      () => props.theme || unwrapInjected(defaultTheme, {})
    )

    const nonEventAttrs = computed(() => omitOn(attrs))

    // @ts-expect-error listeners for Vue 2 compatibility
    const listeners = getCurrentInstance().proxy.$listeners

    console.log(realTheme.value)

    let realListeners = listeners
    if (!realListeners) {
      realListeners = {}
      Object.keys(attrs)
        .filter(
          (key) => key.indexOf('on') === 0 && key.length > 2
        )
        .forEach((key) => {
          // onClick    -> c + lick
          // onZr:click -> z + r:click
          let event =
            key.charAt(2).toLowerCase() + key.slice(3)

          // clickOnce    -> ~click
          // zr:clickOnce -> ~zr:click
          if (
            event.substring(event.length - 4) === 'Once'
          ) {
            event = `~${event.substring(
              0,
              event.length - 4
            )}`
          }
          realListeners[event] = attrs[key]
        })
    }

    const { setOptions } = useECharts(
      chartRef as Ref<HTMLDivElement>,
      realTheme.value as string,
      realListeners
    )

    const init = () => {
      setOptions(build(data.value))
    }

    onMounted(() => {
      init()
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
