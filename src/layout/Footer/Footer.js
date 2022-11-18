import React from 'react'
import { Layout, Row, Col, Image } from 'antd'
import imgBackpack from '../../assets/img/gobackpackfooter.png'

export function Footer() {
  return (
    <Layout.Footer style={{ backgroundColor: '#F4CB77' }}>
      <Row justify="space-between" align="bottom">
        <Col>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ fontWeight: 900, fontFamily: 'monospace', paddingBottom: 10, marginRight: 6, color: 'dimgray' }}>GABRIEL.OLIVERA</div>
            <div style={{ fontWeight: 900, fontFamily: 'emoji', paddingBottom: 10 }}>©</div>
            <div style={{ fontWeight: 900, fontFamily: 'emoji', paddingBottom: 10, marginLeft: 6 }}>2022</div>
          </div>
        </Col>
        <Col>
          <Image preview={false} src={imgBackpack} style={{ width: 180 }} />
        </Col>
      </Row>
    </Layout.Footer>
  )
}