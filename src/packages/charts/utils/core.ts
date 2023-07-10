import { EChartsOption } from 'echarts'
import { _merge } from './index'
import { defaultThemeOpt } from './defaultOpt'
import { merge } from 'pandora-lib/utils'

/**
 * echarts 构建 封装
 *
 * build
 */
export const build = (data: Array<any>): EChartsOption => {
  //   const bgColor = '#fff'
  const title = '总量'
  //   const color = [
  //     '#c065e7',
  //     '#765deb',
  //     '#3862d8',
  //     '#6a89E2',
  //     '#219CF9',
  //     '#6efbbf',
  //     '#40c057',
  //     '#ffd351',
  //     '#ff8e43',
  //     '#f56b6d',
  //   ]
  const formatNumber = function (num) {
    const reg = /(?=(\B)(\d{3})+$)/g
    return num.toString().replace(reg, ',')
  }
  const total = data.reduce((a, b: any) => {
    return a + b.value * 1
  }, 0)

  const opt = _merge(defaultThemeOpt(), {
    tooltip: {
      trigger: 'item',
    },
    title: [
      {
        text:
          '{name|' +
          title +
          '}\n{val|' +
          formatNumber(total) +
          '}',
        top: 'center',
        left: 'center',
        textStyle: {
          rich: {
            name: {
              fontSize: 14,
              fontWeight: 'normal',
              color: '#000',
              padding: [10, 0],
            },
            val: {
              fontSize: 32,
              fontWeight: 'bolder',
              color: '#000',
            },
          },
        },
      },
      {
        text: '单位：个',
        top: 20,
        left: 20,
        textStyle: {
          fontSize: 14,
          color: '#666666',
          fontWeight: 400,
        },
        show: false,
      },
    ],
    series: [
      {
        type: 'pie',
        roseType: 'radius',
        radius: ['25%', '60%'],
        center: ['50%', '50%'],
        data: data,
        hoverAnimation: false,
        itemStyle: {
          normal: {
            borderColor: '#fff',
            borderWidth: 2,
          },
        },
        labelLine: {
          noraml: {
            length: 20,
            length2: 120,
            lineStyle: {
              // color: '#e6e6e6'
            },
          },
        },
        label: {
          normal: {
            formatter: (params: any) => {
              return (
                '{icon|●}{name|' +
                params.name +
                '}\n{value|' +
                formatNumber(params.value) +
                '}'
              )
            },
            // padding: [0 , -100, 25, -100],
            rich: {
              icon: {
                fontSize: 16,
                color: 'inherit',
              },
              name: {
                fontSize: 18,
                padding: [0, 0, 0, 10],
                color: '#000',
              },
              value: {
                fontSize: 14,
                fontWeight: 'bolder',
                padding: [10, 0, 0, 20],
                color: 'inherit',
                // color: '#333333'
              },
            },
          },
        },
      },
    ],
  })
  return opt as EChartsOption
}
