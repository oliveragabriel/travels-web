import React, { useState, useCallback } from 'react';
import { Row, Col, notification, Select, Tooltip, Form } from 'antd';
import { FormOutlined, QuestionCircleTwoTone } from '@ant-design/icons';
import { Input, Button, DatePicker, InputNumber } from '../components'
import { requiredFieldsTextMsg, requestGenericTextMsg } from '../utils/messages';
import { actions } from './reducer/actions';
import { options } from './options';

export const FormAddNewTrip = ({ state, form, dispatch = () => {} }) => {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      console.log(values);
      notification.success({
        message: 'Sucesso',
        description: requestGenericTextMsg.success
      });
      dispatch({type: actions.controlShowModalAddNewTrip, payload: false})
    } catch (error) {
      notification.error({
        message: 'Erro',
        description: requestGenericTextMsg.error
      });
    } finally {
      setLoading(false);
    }
  },[form, dispatch]);

  return (
    <Form form={form} layout='vertical' size='middle' initialValues={state?.editing || { quantity: 1 }}> 
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
      </Row>
      <Row gutter={8} align='bottom'>
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
      </Row>
      <Row gutter={8} align='bottom'>
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
      </Row>
      <Row gutter={8} align='bottom'>
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
      </Row>
      <Row gutter={8} style={{ marginTop: 6 }}>
        <Col>
          <Form.Item>
            <Button 
              type='primary'
              title='Cadastrar'
              htmlType='submit'
              onClick={handleSubmit}
              loading={loading}
            >
              Cadastrar
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
