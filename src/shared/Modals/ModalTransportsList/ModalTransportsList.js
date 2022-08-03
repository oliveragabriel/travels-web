import React, { useCallback, useMemo, useState } from "react"
import { Row, Col } from 'antd'
import { CarOutlined } from '@ant-design/icons'
import { Modal, Table, Button } from '../../../components';
import { columnsTransports } from './columnsTransports'
import { ModalAddNewTransport } from "..";

export const ModalTransportsList = ({ visible, closeFn = () => {} }) => {
  const [showModalAddNewTransport, setShowModalAddNewTransport] = useState(false)

  const handleAdd = useCallback(() => setShowModalAddNewTransport(true), [])

  const handleDelete = useCallback((record) => console.log(record), [])

  const handleCancel = useCallback(() => closeFn(false), [closeFn])

  const TableTransports = useMemo(() => (
      <>
       <Row>
        <Col span={24}>
          <Button 
            type='primary'
            title='Adicionar Novo Transporte'
            label='Adicionar Novo Transporte'
            handleSubmit={() => handleAdd()}
          />
          <ModalAddNewTransport visible={showModalAddNewTransport} closeFn={setShowModalAddNewTransport} />
        </Col>
      </Row>
      <Row style={{ marginTop: 16 }}>
        <Col span={24}>
          <Table columns={columnsTransports(handleDelete)} size="small" />
        </Col>
      </Row>
      </>
    ),[handleAdd, showModalAddNewTransport, setShowModalAddNewTransport, handleDelete])

  return (
    <Modal
      width={800}  
      title='Transportes'
      visible={visible}
      icon={<CarOutlined />}
      handleCancel={() => handleCancel()}
      content={TableTransports}
    />
  )
}