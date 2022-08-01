import React, { useState, useCallback } from 'react'
import { Row, Col, notification, Tooltip, Form } from 'antd'
import { FormOutlined, QuestionCircleTwoTone } from '@ant-design/icons'
import { Input, InputNumber, DatePicker, Select, Button } from '../..'
import { options } from '../../../pages/Travels/options'
import { requiredFieldsTextMsg, requestGenericTextMsg } from '../../../utils/messages'
import { useSelector } from 'react-redux'

export const FormAddNewTrip = ({ form }) => {
  const [loading, setLoading] = useState(false)
  const travel = useSelector((state) => state.selectedTravel)
  
  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true)
      const values = await form.validateFields();
      console.log(values)
      notification.success({
        message: 'Sucesso',
        description: requestGenericTextMsg.success
      })
    } catch (error) {
      notification.error({
        message: 'Erro',
        description: requestGenericTextMsg.error
      });
    } finally {
      setLoading(false)
    }
  },[form]);

  return (
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
            label={
              <Row gutter={12}>
                <Col>
                  Qtde. de Pessoas
                </Col>
                <Col>
                  <Tooltip title="Quantas pessoas irão viajar junto?">
                    <QuestionCircleTwoTone />
                  </Tooltip>
                </Col>
              </Row>
            }
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
  );
}
