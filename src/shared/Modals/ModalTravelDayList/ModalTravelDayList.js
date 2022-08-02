import React, { useCallback, useState } from "react"
import { CalendarOutlined } from '@ant-design/icons'
import { columnsDays } from "./columnsDays"
import { Modal, Table } from "../../../components"
import { useDispatch, useSelector } from "react-redux"
import { ModalAddNewAcommodation } from "../"
import { setSelectedDay } from "../../../redux/reducers/selectedTravelDaySlice"

export const ModalTravelDayList = ({ visible, closeFn = () => {} }) => {
  const reduxDispatch = useDispatch()
  const travel = useSelector((state) => state.selectedTravel)
  const [showModalAddNewAcommodation, setShowModalAddNewAcommodation] = useState(false)
  // const [showModalTransport, setShowModalTransport] = useState(false)

  const handleRedux = useCallback((rdObj) => reduxDispatch(setSelectedDay(rdObj)), [reduxDispatch])
  
  const handleAccommodation = useCallback((record) => {
    handleRedux(record)
    setShowModalAddNewAcommodation(true)
  }, [handleRedux])

  // const handleTransport = useCallback(() => setShowModalTransport(true), [])

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
        {/* <ModalTransport visible={showModalTransport} closeFn={setShowModalTransport} /> */}
        <ModalAddNewAcommodation visible={showModalAddNewAcommodation} closeFn={setShowModalAddNewAcommodation} />
        <Table rowKey='id' columns={columnsDays(handleAccommodation)} size="small"  dataSource={travel?.days}/> 
      </>}
    />
  )
}