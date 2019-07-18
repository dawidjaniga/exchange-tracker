import React from 'react'
import styled from 'styled-components'
import { Spin, Alert, Icon } from 'antd'
import { useApi } from '../../hooks/api'
import Trend from '../trend'

const DeleteIcon = styled(Icon)`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.2;
  transition: 0.2s opacity;
`

const Wrapper = styled.div`
  margin: 2em;
  height: 64px;
  display: flex;
  position: relative;
  &:hover ${DeleteIcon} {
    opacity: 1;
  }
`

const LoadingWrapper = styled.div`
  place-content: center center;
  width: 100%;
  height: 100%;
  display: flex;
`

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
  width: 90%;
`

export default function Company ({ symbol, deleteCompany }) {
  const { data, error, isLoading } = useApi(symbol)
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

  function onClickDelete () {
    deleteCompany(symbol)
  }

  return (
    <Wrapper>
      <DeleteIcon type='delete' onClick={onClickDelete} />
      {error ? (
        <AlertWrapper message={error} type='error' showIcon />
      ) : (
        <React.Fragment>
          {isLoading ? (
            <LoadingWrapper>
              <Spin />
            </LoadingWrapper>
          ) : (
            <React.Fragment>
              <Logo src={logo} />
              <div>
                <Row>
                  <Name>{name}</Name>
                  <Symbol>{symbol}</Symbol>
                  <Website>
                    <a
                      href={`http://${domain}`}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      {domain}
                    </a>
                  </Website>
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
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </Wrapper>
  )
}
