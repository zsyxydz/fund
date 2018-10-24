

import React from 'react'
import ReactEcharts from 'echarts-for-react'
import _ from 'lodash'
import { TO_FIXED } from '../../../../utils/number'



const Treemap = (props) => {
  const { data } = props
  console.log('treemap', data)

  const propsData = _.cloneDeep(data)

  let positiveItems = []
  let negtiveItems = []
  positiveItems = propsData.filter(item => item.value >= 0)
  negtiveItems = propsData.filter(item => item.value < 0)

  const totalPositive = positiveItems.reduce((sum, item) => sum + item.value, 0)
  const totalNegtive = negtiveItems.reduce((sum, item) => sum + item.value, 0)

  positiveItems.forEach((item, index) => {
    if (!item.name) {
      positiveItems[index].name = '--'
    }
    positiveItems[index].value = TO_FIXED(item.value)
    positiveItems[index].label = {
      show: true,
      normal: {
        formatter: '{b}\n{c}%',
        // formatter: (params => <div style='color: red'>params.name</div>),
        textStyle: {
          color: '#33517a',
          fontSize: 14,
          fontWeight: 500,
        },
      },
    }
    positiveItems[index].itemStyle = {
      normal: {
        gapWidth: 1,
      },
    }
  })

  negtiveItems.forEach((item, index) => {
    if (!item.name) {
      negtiveItems[index].name = '--'
    }
    negtiveItems[index].value = TO_FIXED(Math.abs(item.value))
    negtiveItems[index].label = {
      show: true,
      normal: {
        formatter: '{b}\n-{c}%',
        textStyle: {
          color: '#33517a',
          fontSize: 14,
          fontWeight: 500,
        },
      },
    }
    negtiveItems[index].itemStyle = {
      normal: {
        gapWidth: 1,
      },
    }
  })

  console.log(positiveItems, totalPositive)
  console.log(negtiveItems, totalNegtive)
  const treeData = [
    {
      name: '1',
      value: totalPositive,
      children: positiveItems,
      // color: ['#ffb9b9'],
      colorAlpha: [0.5, 1],
      itemStyle: {
        normal: {
          gapWidth: 1,
        },
      },
    },
    {
      name: '2',
      value: Math.abs(totalNegtive),
      children: negtiveItems,
      // color: ['#b0df7f'],
      colorAlpha: [0.5, 1],
      itemStyle: {
        normal: {
          gapWidth: 1,
        },
      },
    },
  ]

  const levels = [
    {
      color: ['#ffb9b9', '#b0df7f'],
      itemStyle: {
        normal: {
          gapWidth: 1,
        },
      },
    },
    {
      itemStyle: {
        normal: {
          gapWidth: 1,
        },
      },
    },
  ]

  const option = {
    series: [{
      name: 'contribution treemap',
      type: 'treemap',
      data: treeData,
      nodeClick: false,
      roam: false,
      levels,
      breadcrumb: {
        show: false,
      },
      width: '100%',
      height: 240,
      top: 'top',
      // colorAlpha: [0.5, 1],
      // label: {
      //   show: true,
      //   normal: {
      //     formatter: '{b}\n{c}%',
      //     textStyle: {
      //       color: '#33517a',
      //       fontSize: 14,
      //       fontWeight: 500,
      //     },
      //   },
      // },
    }],
  }

  return (
    <ReactEcharts
      option={option}
    />
  )
}

export default Treemap
