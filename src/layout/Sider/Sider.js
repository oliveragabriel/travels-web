import React from 'react'
import { useNavigate } from "react-router-dom"
import { Layout, Row, Col } from "antd"
import { Menu, Avatar } from './styles'
import { EllipsisOutlined } from '@ant-design/icons'
import { functionalities } from './utils'
import { styleIconSizeThirtyAndColor } from '../../utils/styles'
import { useSelector } from 'react-redux'

export const Sider = ({ collapsed }) => {
  const isLogged = useSelector((state) => state.loggedUser.isLogged)
  const navigate = useNavigate()

  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: '#F0F8FF' }}>
        <Row justify='center' align='bottom'>
          <Col style={{ padding: 12 }}>
            {collapsed ? <EllipsisOutlined style={styleIconSizeThirtyAndColor} /> : 
            <Avatar alt='Plans And Vacaciones' />}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
              <Menu items={functionalities(isLogged, navigate)} />
          </Col>
        </Row>
    </Layout.Sider>
  )
}