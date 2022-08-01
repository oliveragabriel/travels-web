import React, { useCallback, useEffect, useMemo } from "react"
import { Form } from 'antd'
import { FormAddNewTrip } from './Form'
import { RocketOutlined } from '@ant-design/icons'
import { Modal } from "../../../components"
import { useSelector } from "react-redux"

export const ModalAddNewTravel = ({ visible, closeFn = () => {} }) => {
  const [form] = Form.useForm()
  const travel = useSelector((state) => state.selectedTravel.travel)

  const handleCancel = useCallback(() => {
    closeFn(false)
    form.resetFields()
  }, [form, closeFn])

  const title = useMemo(() => {
    if(travel === null) { return 'Adicionar Nova Viagem'}
    else { return 'Editar Viagem'}
  }, [travel])

  useEffect(() => {
    form.resetFields()
    setTimeout(() => form.setFieldsValue({...travel}), 0)
  }, [travel, form])

  return (
    <Modal
      width={800}
      title={title}
      visible={visible}
      icon={<RocketOutlined />}
      handleCancel={() => handleCancel()}
      content={<FormAddNewTrip form={form} />}
    />
  )
}