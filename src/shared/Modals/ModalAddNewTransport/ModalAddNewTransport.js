import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Row, Col, Form } from 'antd'
import { CarOutlined, VerticalAlignTopOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { Modal, Input, InputNumber, Select, CurrencySelector, Button } from '../../../components'
import { requiredFieldsTextMsg, requestGenericTextMsg } from '../../../utils/messages'
import { openNotification } from '../../../utils/functions/notification'
import { options } from './options'

export function ModalAddNewTransport({ visible, closeFn = () => {} }) {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const transport = useSelector((state) => state.selectedTransport)

  const handleCancel = useCallback(() => {
    closeFn(false)
    form.resetFields()
  }, [closeFn, form])
  
  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true)
      const values = await form.validateFields()
      console.log(values)
      openNotification('success','Sucesso', requestGenericTextMsg.success)
      handleCancel()
    } catch (error) {
      openNotification('error','Erro', requestGenericTextMsg.error)
    } finally {
      setLoading(false)
    }
  },[form, handleCancel])

  const title = useMemo(() => {
    if(transport === null) { return 'Adicionar Transporte'}
    return 'Editar Transporte'
  }, [transport])

  useEffect(() => {
    form.resetFields()
    setTimeout(() => form.setFieldsValue({ ...transport }), 0)
  }, [form, transport])

  const FormAddNewTransport = useMemo(() => (
    <Form form={form} layout='vertical'> 
      <Row gutter={8} align='bottom'>
        <Col span={12}>
          <Form.Item
            name='type'
            label='Tipo'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('Tipo') }
            ]}
          >
            <Select 
              placeholder='Escolha uma opção'
              options={options}
              allowClear
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='price'
            label='Valor'
            tooltip='Escolha uma moeda e digite o valor à ser pago. Exemplo: Para Real Brasileiro, selecione a opção com a sigla (BRL) e o símbolo (R$).'
          >
            <InputNumber 
              placeholder='0,00'
              min={0.01}
              addonBefore={
                <Form.Item name='currency' noStyle>
                  <CurrencySelector />
                </Form.Item>
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8} align='bottom'>
        <Col span={12}>
          <Form.Item
            name='pickupAdress'
            label='Local de Embarque'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('Local de Embarque') }
            ]}
          >
            <Input 
              placeholder='Digite o Local de Embarque'
              addonAfter={<VerticalAlignTopOutlined />}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='destinyAdress'
            label='Local de Destino'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('Local de Destino') }
            ]}
          >
            <Input 
              placeholder='Digite o Local de Destino'
              addonAfter={<VerticalAlignBottomOutlined />}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8} style={{ marginTop: 6 }}>
        <Col>
          <Form.Item>
            <Button 
              type='primary'
              title='Confirmar'
              label='Confirmar'
              htmlType='submit'
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  ),[form, handleSubmit, loading])

  return (
    <Modal
      width={800}  
      title={title}
      visible={visible}
      icon={<CarOutlined />}
      handleCancel={() => handleCancel()}
      content={FormAddNewTransport}
    />
  )
}