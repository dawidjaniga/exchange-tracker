import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const { Header } = Layout

const Logo = styled.h1`
  color: var(--color-white);
  float: left;
  margin: 0 0.5em;
`

const InnerHeader = styled.div`
  max-width: var(--page-width);
  margin: auto;
`

export default function HeaderComponent () {
  return (
    <Header>
      <InnerHeader>
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
      </InnerHeader>
    </Header>
  )
}
