import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Row, Col, Form } from 'antd'
import { ScheduleOutlined, BankOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { Modal, Input, InputNumber, Select, CurrencySelector, Button, TextArea, FormItem, CollapseAdressInfo } from '../../../components'
import { requiredFieldsTextMsg, requestGenericTextMsg } from '../../../utils/messages'
import { openNotification } from '../../../utils/functions/notification'
import { typeOptions, statusOptions } from './options'

export function ModalAddNewActivity({ visible, closeFn = () => {} }) {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const activity = useSelector((state) => state.selectedActivity)

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
    if(activity === null) { return 'Adicionar Atividade'}
    return 'Editar Atividade'
  }, [activity])

  useEffect(() => {
    form.resetFields()
    setTimeout(() => form.setFieldsValue({ ...activity }), 0)
  }, [form, activity])

  const FormAddNewActivity = useMemo(() => (
    <Form form={form} layout='vertical'> 
      <Row gutter={8} align='bottom'>
        <Col span={12}>
          <Form.Item
            name='activity'
            label='Nome'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('Nome') }
            ]}
          >
            <Input 
              placeholder='Digite o Nome'
              addonAfter={<BankOutlined />}
            />
          </Form.Item>
        </Col>
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
              options={typeOptions}
              allowClear
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <FormItem
            name='price'
            label='Valor'
            tooltip='Escolha uma moeda e digite o valor à ser pago. Exemplo: Para Real Brasileiro, selecione a opção com a sigla (BRL) e o símbolo (R$).'
            content={
              <InputNumber 
                placeholder='0,00'
                min={0.01}
                addonBefore={
                  <Form.Item name='currency' noStyle>
                    <CurrencySelector />
                  </Form.Item>
                }
              />
            }
          />
        </Col>
        <Col span={12}>
          <Form.Item
            name='status'
            label='Situação'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('Situação') }
            ]}
          >
            <Select 
              placeholder='Escolha uma opção'
              options={statusOptions}
              allowClear
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <FormItem
            name='comments'
            label='Observações'
            content={
              <TextArea 
                placeholder='Escreva observações sobre a atividade...'
                rows={4}
              />
            }
          />
        </Col>
        <Col span={24}>
          <CollapseAdressInfo />
        </Col>
      </Row>
      <Row gutter={8} style={{ marginTop: 12 }}>
        <Col>
          <FormItem
            content={  
              <Button 
                type='primary'
                title='Confirmar'
                label='Confirmar'
                htmlType='submit'
                handleSubmit={handleSubmit}
                loading={loading}
              />
            }
          />
        </Col>
      </Row>
    </Form>
  ),[form, handleSubmit, loading])

  return (
    <Modal
      width={800}  
      title={title}
      visible={visible}
      icon={<ScheduleOutlined />}
      handleCancel={() => handleCancel()}
      content={FormAddNewActivity}
    />
  )
}