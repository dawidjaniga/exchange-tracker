import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import styled from 'styled-components'

import Companies from './views/companies'
import TrackCompany from './views/track-company'

const { Header, Content, Footer } = Layout

const Logo = styled.h1`
  color: #fff;
  float: left;
  margin: 0;
`

const ContentWrapper = styled(Content)`
  padding: 2em;
  margin: 2em;
  background: #fff;
  box-shadow: 0px 6px 30px #00000017;
`

function App () {
  return (
    <Router>
      <Layout className='layout'>
        <Header>
          <Logo>Stock Tracker</Logo>
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key='1'>
              <Link to='/track-company/'>Track company</Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to='/companies/'>Companies</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <ContentWrapper>
          <Route path='/' exact component={Companies} />
          <Route path='/companies' exact component={Companies} />
          <Route path='/track-company' component={TrackCompany} />
        </ContentWrapper>
        <Footer style={{ textAlign: 'center' }}>
          Stock Tracker ©2019 Created by Dawid Janiga
        </Footer>
      </Layout>
    </Router>
  )
}

export default App
