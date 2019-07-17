import React from 'react'
import styled from 'styled-components'

const TrendWrapper = styled.div`
  margin: 0 0.5em;
  font-size: 0.8em;
  color: var(${props => (props.plus ? '--color-green' : '--color-red')});
`

export default function Trend ({ change, trend }) {
  const plus = change.charAt(0) === '+'
  const sign = plus ? '▲' : '▼'
  return (
    <TrendWrapper plus={plus}>
      {parseFloat(change).toFixed(2)} ({(parseFloat(trend) * -1).toFixed(2)}%){' '}
      {sign}
    </TrendWrapper>
  )
}
