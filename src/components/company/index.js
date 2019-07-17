import React from 'react'
import styled from 'styled-components'

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
`

const Symbol = styled.div`
  margin: 0 0.5em;
`

const Website = styled.div`
  font-size: 0.8em;
`

const Country = styled.div`
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

const Trend = styled.div`
  margin: 0 0.5em;
  font-size: 0.8em;
`

const ClosedDate = styled.div`
  font-size: 0.8em;
`

export default function Company ({ symbol }) {
  return (
    <Wrapper>
      <Logo src='https://picsum.photos/64' />
      <Container>
        <Row>
          <Name>Name</Name>
          <Symbol>{symbol}</Symbol>
          <Website>Website</Website>
        </Row>
        <Row>
          <Country>Country</Country>
          <DateTime>Time 09:30 - 16:00 UTC-5</DateTime>
        </Row>
        <Row>
          <Value>150.45 USD</Value>
          <Trend>+0.70 (4.33%)</Trend>
          <ClosedDate>Closed: 2019-07-17</ClosedDate>
        </Row>
      </Container>
    </Wrapper>
  )
}
