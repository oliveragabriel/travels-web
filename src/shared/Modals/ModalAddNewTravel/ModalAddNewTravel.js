import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Row, Col, Form } from 'antd'
import { RocketOutlined, FormOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, DatePicker, Input, Select, TextArea, Button, CountrySelector } from '../../../components'
import { requiredFieldsTextMsg, requestGenericTextMsg } from '../../../utils/messages'
import { openNotification } from '../../../utils/functions/notification'
import { options } from './options'
import { cleanSelectedTravel } from '../../../redux/reducers/selectedTravelSlice'

export function ModalAddNewTravel({ visible, closeFn = () => {} }) {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const travel = useSelector((state) => state.selectedTravel)

  const handleCancel = useCallback(() => {
    closeFn(false)
    form.resetFields()
    dispatch(cleanSelectedTravel())
  }, [form, dispatch, closeFn])

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true)
      const values = await form.validateFields()
      console.log(values)
      openNotification('success','Sucesso', requestGenericTextMsg.success)
    } catch (error) {
      openNotification('error','Erro', requestGenericTextMsg.error)
    } finally {
      setLoading(false)
    }
  },[form])

  const title = useMemo(() => {
    if(travel === null) { return 'Adicionar Nova Viagem'}
    return 'Editar Viagem'
  }, [travel])

  useEffect(() => {
    form.resetFields()
    setTimeout(() => form.setFieldsValue({ ...travel }), 0)
  }, [form, travel])

  const FormAddNewTrip = useMemo(() => (
    <Form form={form} layout='vertical' size='middle'> 
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
            label='Data de Embarque'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('Data de Embarque') }
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
            label='Data de Retorno'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('Data de Retorno') }
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
            name='country'
            label='País de Destino'
            tooltip="Caso a viagem seja para mais de um país ou ainda não tenha um definido, deixe o campo em branco."
          >
            <CountrySelector />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name='description'
            label='Descrição'
          >
            <TextArea 
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