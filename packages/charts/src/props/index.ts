import { PropType } from 'vue-demi'
import type {
  Theme,
  ChartsOption,
  OriginData,
  InitOptions,
  LoadingOptions,
  UpdateOptions,
  AutoresizeProp,
} from '../types'
export const defaultProps = {
  data: {
    type: Array as PropType<OriginData<any>[]>,
    default: () => [],
  },
  theme: {
    type: [Object, String] as PropType<Theme>,
  },
  //
  options: {
    type: Object as PropType<ChartsOption>,
    default: () => {},
  },
  group: String,
  // echarts 配置
  initOptions: Object as PropType<InitOptions>,
  // 更新配置
  updateOptions: Object as PropType<UpdateOptions>,
  //
  manualUpdate: Boolean,
  //
  autoresize: {
    type: [Boolean, Object] as PropType<AutoresizeProp>,
    default: true,
  },
  // loading
  loading: {
    type: Boolean,
    default: false,
  },
  // loading配置
  loadingOptions: {
    type: Object as PropType<LoadingOptions>,
    default: () => {},
  },
}
