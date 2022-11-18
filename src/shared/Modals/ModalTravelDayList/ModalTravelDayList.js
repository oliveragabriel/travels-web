import React, { useCallback, useEffect, useState } from 'react'
import { CalendarOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Col, Form, Row } from 'antd'
import { columnsDays } from './columnsDays'
import { Modal, Table, Input, Card, FlagIcon, FormItem } from '../../../components'
import { ModalAddNewAcommodation, ModalTransportsList } from '..'
import { setSelectedDay } from '../../../redux/reducers/selectedTravelDaySlice'

export function ModalTravelDayList({ visible, closeFn = () => {} }) {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const travel = useSelector((state) => state.selectedTravel)
  const [showModalAddNewAcommodation, setShowModalAddNewAcommodation] = useState(false)
  const [showModalTransportsList, setShowModalTransportsList] = useState(false)
  
  const handleAccommodation = useCallback((record) => {
    dispatch(setSelectedDay(record))
    setShowModalAddNewAcommodation(true)
  }, [dispatch])

  const handleTransport = useCallback((record) => {
    dispatch(setSelectedDay(record))
    setShowModalTransportsList(true)
  }, [dispatch])
  
  const handleActivities = useCallback((record) => {
    dispatch(setSelectedDay(record))
    navigate('/activities')
  }, [dispatch, navigate]) 

  const handleCancel = useCallback(() => {
    closeFn(false)
  }, [closeFn])

  useEffect(() => {
    form.resetFields()
    setTimeout(() => form.setFieldsValue({ ...travel }), 0)
  }, [travel, form])

  return (
    <Modal
      width={800}
      title='Planejamento'
      visible={visible}
      icon={<CalendarOutlined />}
      handleCancel={() => handleCancel()}
      content={<>
        <Card
          content={
            <Form form={form}>
              <Row gutter={12} align='top'>
                {travel?.country && <Col span={3}>
                  <FlagIcon code={travel?.country} size='2x' />
                </Col>}
                <Col span={20}>
                  <FormItem
                    name='title'
                    label='Título'
                    content={
                      <Input readOnly disabled />
                    }
                  />
                </Col>
              </Row>
            </Form>
          }
        />
        <ModalTransportsList visible={showModalTransportsList} closeFn={setShowModalTransportsList} />
        <ModalAddNewAcommodation visible={showModalAddNewAcommodation} closeFn={setShowModalAddNewAcommodation} />
        <Table 
          style={{ marginTop: 16 }}
          rowKey='id' 
          columns={columnsDays(handleAccommodation, handleTransport, handleActivities)} 
          size="small"  
          dataSource={travel?.days}
        /> 
      </>}
    />
  )
}