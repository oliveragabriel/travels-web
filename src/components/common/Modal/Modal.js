import React from 'react'
import { StyledModal } from './styled'
import { CloseCircleTwoTone } from '@ant-design/icons'
import { Row, Col } from 'antd'

export const Modal = ({ width, title, visible, icon, handleCancel = () => {}, content }) => {

  return (<StyledModal  
    width={width ?? undefined}  
    title={
      <Row gutter={[24,0]} align='middle'>
        <Col style={{ fontSize: 30,  color: '#FF8C00' }}>
          {icon}
        </Col>
        <Col>
          {title}
        </Col>
      </Row>
    }
    visible={visible}
    centered
    footer={null}
    onCancel={() => handleCancel()}
    closeIcon={<CloseCircleTwoTone twoToneColor='#ff4d4f' style={{ fontSize: 20 }} />}
  >
    {content}
  </StyledModal>)
}