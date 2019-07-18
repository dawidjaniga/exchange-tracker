import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { Button, Icon, Input, Result, Tooltip } from 'antd'
import styled from 'styled-components'

import { addCompanySymbol } from './../../services/storage'

const Hint = styled.p`
  margin-bottom: 1em;
`

export default function TrackCompany () {
  const [symbol, setSymbol] = useState('')
  const [symbolAdded, setSymbolAdded] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  function onChange (e) {
    if (showTooltip) {
      setShowTooltip(false)
    }

    setSymbol(e.target.value)
  }

  function addSymbol (e) {
    if (!symbol) {
      e.preventDefault()
      setShowTooltip(true)
      return
    }

    addCompanySymbol(symbol)
    setSymbolAdded(true)
  }

  return (
    <div>
      {symbolAdded && <Redirect to='/companies' />}
      <Result
        icon={<Icon type='api' theme='twoTone' />}
        title='Track company'
        extra={
          <Button type='primary' onClick={addSymbol}>
            Track
          </Button>
        }
      >
        <form onSubmit={addSymbol}>
          <label>
            <Hint>Company symbol</Hint>
            <Tooltip
              title='We need a symbol to track. You can start with AMZN, GOOG, AAPL, FB or TSLA'
              visible={showTooltip}
            >
              <Input
                placeholder='Provide the stock exchange symbol of a company you want to track'
                allowClear
                onChange={onChange}
              />
            </Tooltip>
          </label>
        </form>
      </Result>
    </div>
  )
}
