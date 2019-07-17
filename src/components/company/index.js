import React from 'react'
import styled from 'styled-components'
import { Spin, Alert } from 'antd'
import { useApi } from './../../hooks/api'
import Trend from '../trend'

const Wrapper = styled.div`
  margin: 2em;
  height: 64px;
  display: flex;
`

const Container = styled.div``
const Row = styled.div`
  align-items: baseline;
  display: flex;
`

const Name = styled.h3`
  font-size: 1.2em;
  font-weight: bold;
  margin: 0;
`

const Logo = styled.img`
  margin-right: 0.5em;
  width: 64px;
  object-fit: contain;
`

const Symbol = styled.div`
  margin: 0 0.5em;
`

const Website = styled.div`
  font-size: 0.8em;
`

const Region = styled.div`
  font-size: 0.8em;
`

const DateTime = styled.div`
  margin: 0 0.5em;
  font-size: 0.8em;
`

const Value = styled.div`
  font-size: 0.8em;
  font-weight: bold;
`

const ClosedDate = styled.div`
  font-size: 0.8em;
`

const AlertWrapper = styled(Alert)`
  margin: auto;
`

export default function Company ({ symbol }) {
  const [{ data, error, isLoading }] = useApi(symbol)
  const {
    name,
    region,
    marketOpen,
    marketClose,
    timezone,
    currency,
    price,
    change,
    closeDate,
    trend,
    logo,
    domain
  } = data

  return (
    <Wrapper>
      {error ? (
        <AlertWrapper
          message='Third Party API Error'
          description={error}
          type='error'
          showIcon
        />
      ) : (
        <React.Fragment>
          {isLoading ? (
            <Spin />
          ) : (
            <React.Fragment>
              <Logo src={logo} />
              <Container>
                <Row>
                  <Name>{name}</Name>
                  <Symbol>{symbol}</Symbol>
                  <Website>{domain}</Website>
                </Row>
                <Row>
                  <Region>{region}</Region>
                  <DateTime>
                    {marketOpen} - {marketClose} {timezone}
                  </DateTime>
                </Row>
                <Row>
                  <Value>
                    {price} {currency}
                  </Value>
                  <Trend change={change} trend={trend} />
                  <ClosedDate>Closed: {closeDate}</ClosedDate>
                </Row>
              </Container>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </Wrapper>
  )
}
