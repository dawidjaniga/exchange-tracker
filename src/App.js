import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Layout } from 'antd'
import 'antd/dist/antd.css'

import Companies from './views/companies'
import TrackCompany from './views/track-company'
import Header from './components/header'

const { Content, Footer } = Layout

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`

const ContentWrapper = styled(Content)`
  padding: 2em;
  background: var(--color-white);
  box-shadow: 0px 6px 30px var(--color-light-gray);
  max-width: var(--page-width);
  margin: 2em auto;
  width: 100%;
`

const StyledFooter = styled(Footer)`
  margin: auto;
`

function App () {
  return (
    <Router>
      <StyledLayout className='layout'>
        <Header />
        <ContentWrapper>
          <Route path='/' exact component={Companies} />
          <Route path='/companies' exact component={Companies} />
          <Route path='/track-company' component={TrackCompany} />
        </ContentWrapper>
        <StyledFooter>Stock Tracker ©2019 Created by Dawid Janiga</StyledFooter>
      </StyledLayout>
    </Router>
  )
}

export default App
