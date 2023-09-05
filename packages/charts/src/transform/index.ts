import { getNormalSeriesObj } from './seriesHelper'
import type { ChartTypes } from '../types/chart'
/**
 * 转换数据 生成 echarts Series 对象
 * @param data
 * @param chartName
 */
export const transformOriginDataToSeries = (
  data,
  chartName: ChartTypes
) => {
  // 转换原始数据
  const { seriesObj, category } = getNormalSeriesObj(
    data,
    chartName
  )
  return {
    series: seriesObj,
    category,
  }
}
