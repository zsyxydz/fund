import React from 'react'
import { Treemap as TR, ResponsiveContainer } from 'recharts'
import Color from 'color'
import _ from 'lodash'
import { TO_FIXED } from '../../../utils/number'

// const DATA = [
//   {
//     name: 'profit',
//     children: [
//       { name: 'Axes', size: 1302 },
//       { name: 'Axis', size: 4593 },
//       { name: 'AxisGridLine', size: 652 },
//       { name: 'AxisLabel', size: 636 },
//       { name: 'CartesianAxes', size: 6703 },
//     ],
//   },
//   {
//     name: 'loss',
//     children: [
//       { name: 'AnchorControl', size: 2138 },
//       { name: 'ClickControl', size: 3824 },
//       { name: 'Control', size: 1353 },
//     ],
//   },
// ]

const COLORS = ['#FFB9B9', '#B0DF7F']

// rgb(r,g,b) ==> [rgba(r,g,b,0.5), rgba(r,g,b,1)]
const colorAlpha = (color, index, divider) => Color(color).alpha(1 - ((0.7 / divider) * index)).rgb().string()

const CustomizedContent = (props) => {
  const { root, depth, x, y, width, height, index, payload, colors, rank, name, value, display, percent } = props

  const divider = root.children.length
  const baseColor = (root.name === 'profit' ? colors[0] : colors[1])
  const fillColor = depth >= 2 ? colorAlpha(baseColor, index, divider) : 'none'

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: fillColor,
          stroke: '#FFFFFF',
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {
        depth === 2 ?
          <text
            x={x + (width / 2)}
            y={y + (height / 2)}
            textAnchor="middle"
            stroke="#31507B"
            fontSize={14}
            fontWeight={200}
          >
            <tspan
              x={x + (width / 2)}
              y={y + (height / 2)}
              fontWeight={100}
            >
              {name}
            </tspan>
            <tspan
              x={x + (width / 2)}
              y={y + (height / 2) + 18}
              textAnchor="middle"
              stroke={display > 0 ? '#D83D38' : '#477017'}
              fontSize={12}
              fontWeight={100}
            >
              {display}%
            </tspan>
          </text>
          : null
      }
    </g>
  )
}

const Treemap = (props) => {
  const { data } = props
  console.log(data)
  const rawData = _.cloneDeep(data)

  const posiItems = rawData.filter(item => item.value >= 0).map(item =>
    ({
      name: item.name,
      value: item.percent * 100,
      display: TO_FIXED(item.value, 2, '0.00%'),
    }),
  )

  const negaItems = rawData.filter(item => item.value < 0).map(item =>
    ({
      name: item.name,
      value: Math.abs(item.percent) * 100,
      display: TO_FIXED(item.value, 2, '0.00%'),
    }),
  )

  console.log(posiItems)
  console.log(negaItems)

  const treeData = [
    {
      name: 'profit',
      children: posiItems,
    },
    {
      name: 'loss',
      children: negaItems,
    },
  ]

  return (
    <ResponsiveContainer width="100%" >
      <TR
        width={400}
        height={240}
        data={treeData}
        dataKey="value"
        ratio={4 / 3}
        stroke="#fff"
        // fill="#B0DF7F"
        content={<CustomizedContent colors={COLORS} />}
      />
    </ResponsiveContainer>
  )
}

export default Treemap
