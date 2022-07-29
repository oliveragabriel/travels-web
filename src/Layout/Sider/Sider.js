import React from 'react';
import { useNavigate } from "react-router-dom";
import { Layout, Menu, Row, Col, Avatar } from "antd";
import { EllipsisOutlined } from '@ant-design/icons';
import { functionalities } from './utils';
import { styleIconSizeThirtyAndColor } from '../../utils/styles';

const styleMenuBackgroundColor = {
  backgroundColor: '#F0F8FF',
};

export const Sider = ({ collapsed }) => {
  const navigate = useNavigate();

  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed} style={styleMenuBackgroundColor}>
        <Row justify='center' align='bottom'>
          <Col style={{ padding: 12 }}>
            {collapsed ? <EllipsisOutlined style={styleIconSizeThirtyAndColor} /> : 
            <Avatar alt='Plans And Vacaciones' style={{ width: 100, height: 100 }} />}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
              <Menu items={functionalities(navigate)} style={styleMenuBackgroundColor}/>
          </Col>
        </Row>
    </Layout.Sider>
  )
}