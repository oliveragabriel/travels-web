import React, { useCallback, useEffect, useMemo, useState } from "react"
import { Row, Col, Form } from 'antd'
import { RocketOutlined, FormOutlined } from '@ant-design/icons'
import { Modal, DatePicker, Input, InputNumber, Select, Button } from "../../../components"
import { requiredFieldsTextMsg, requestGenericTextMsg } from '../../../utils/messages'
import { openNotification } from '../../../utils/functions/notification'
import { useSelector } from "react-redux"
import { options } from './options'

export const ModalAddNewTravel = ({ visible, closeFn = () => {} }) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const travel = useSelector((state) => state.selectedTravel)

  const handleCancel = useCallback(() => {
    closeFn(false)
    form.resetFields()
  }, [form, closeFn])

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      console.log(values);
      openNotification('success','Sucesso', requestGenericTextMsg.success);
    } catch (error) {
      openNotification('error','Erro', requestGenericTextMsg.error);
    } finally {
      setLoading(false);
    }
  },[form])

  const FormAddNewTrip = useMemo(() => (
      <Form form={form} layout='vertical' size='middle' initialValues={{ ...travel }}> 
        <Row gutter={8} align='bottom'>
          <Col span={24}>
            <Form.Item
              name='title'
              label='Título'
              hasFeedback
              required
              rules={[
                { required: true, message: requiredFieldsTextMsg('Título') }
              ]}
              >
              <Input 
                placeholder='Digite um Título'
                addonAfter={<FormOutlined />}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='arrival'
              label='Data de Chegada'
              hasFeedback
              required
              rules={[
                { required: true, message: requiredFieldsTextMsg('Data de Chegada') }
              ]}
            >
              <DatePicker 
                placeholder='Selecione uma data'
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='departure'
              label='Data de Saída'
              hasFeedback
              required
              rules={[
                { required: true, message: requiredFieldsTextMsg('Data de Saída') }
              ]}
            >
              <DatePicker
                placeholder='Selecione uma data'
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='type'
              label='Tipo'
              >
              <Select 
                options={options}
                placeholder='Escolha uma opção'
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='quantity'
              label='Qtde. de Pessoas'
              tooltip="Quantas pessoas irão viajar junto?"
            >
              <InputNumber
                min={1}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name='description'
              label='Descrição'
              >
              <Input.TextArea 
                rows={4}
                allowClear
                maxLength={200}
                showCount
                placeholder='Escreva uma descrição para esta viagem...'
              />
            </Form.Item>
          </Col>
        <Col>
            <Form.Item>
              <Button 
                type='primary'
                htmlType='submit'
                title='Alterar'
                label='Alterar'
                handleSubmit={handleSubmit}
                loading={loading}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    ), [handleSubmit, form, loading, travel])

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
      content={FormAddNewTrip}
    />
  )
}