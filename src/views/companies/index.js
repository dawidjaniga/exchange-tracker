import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Result, Button } from 'antd'
import Company from './../../components/company'

import {
  removeCompanySymbol,
  getCompanySymbols
} from './../../services/storage'

export default function Companies () {
  const [symbols, setSymbols] = useState([])
  const [refresh, setRefresh] = useState(false)

  function deleteCompany (symbol) {
    removeCompanySymbol(symbol)
    setRefresh(true)
  }

  useEffect(
    () => {
      setRefresh(false)
      setSymbols(getCompanySymbols())
    },
    [refresh]
  )

  return (
    <div>
      <h1>Companies</h1>
      {symbols.length ? (
        symbols.map(symbol => (
          <Company key={symbol} symbol={symbol} deleteCompany={deleteCompany} />
        ))
      ) : (
        <Result
          status='404'
          title='There are no companies yet'
          extra={
            <Button type='primary'>
              <Link to='/track-company'>Track your first company</Link>
            </Button>
          }
        />
      )}
    </div>
  )
}
