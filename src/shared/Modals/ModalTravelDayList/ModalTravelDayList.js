import React, { useCallback, useState } from "react"
import { CalendarOutlined } from '@ant-design/icons'
import { columnsDays } from "./columnsDays"
import { Modal, Table, Input } from "../../../components"
import { useDispatch, useSelector } from "react-redux"
import { ModalAddNewAcommodation, ModalTransportsList } from "../"
import { setSelectedDay } from "../../../redux/reducers/selectedTravelDaySlice"
import { useNavigate } from "react-router-dom"
import { Col, Form, Row } from "antd"

export const ModalTravelDayList = ({ visible, closeFn = () => {} }) => {
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

  return (
    <Modal
      width={800}
      title='Planejamento'
      visible={visible}
      icon={<CalendarOutlined />}
      handleCancel={() => handleCancel()}
      content={<>
        <Form initialValues={{ ...travel }}>
          <Row>
              <Col span={24}>
                  <Form.Item 
                      label='Título'
                      name='title'
                  >
                      <Input readOnly disabled />
                  </Form.Item>
              </Col>
          </Row>
        </Form>
        <ModalTransportsList visible={showModalTransportsList} closeFn={setShowModalTransportsList} />
        <ModalAddNewAcommodation visible={showModalAddNewAcommodation} closeFn={setShowModalAddNewAcommodation} />
        <Table rowKey='id' columns={columnsDays(handleAccommodation, handleTransport, handleActivities)} size="small"  dataSource={travel?.days}/> 
      </>}
    />
  )
}