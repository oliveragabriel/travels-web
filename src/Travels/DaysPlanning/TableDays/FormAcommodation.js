import React, { useState, useCallback, useContext } from 'react';
import { Row, Col, Form, Select } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Input, Button, InputNumber } from '../../../components'
import { requiredFieldsTextMsg, requestGenericTextMsg } from '../../../utils/messages';
import { actions } from '../../reducer/actions';
import { openNotification } from '../../../utils/functions/notification';
import { Context } from '../../Travels';
import { options } from './options';

export const FormAddNewAcommodation = ({ form }) => {
  const [loading, setLoading] = useState(false);
  const {state, dispatch} = useContext(Context);
  
  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      console.log(values);
      openNotification('success','Sucesso', requestGenericTextMsg.success);
      dispatch({type: actions.controlShowModalAddNewAcommodation, payload: false})
    } catch (error) {
      openNotification('error','Erro', requestGenericTextMsg.error);
    } finally {
      setLoading(false);
    }
  },[form, dispatch]);

  return (
    <Form form={form} layout='vertical' size='middle' initialValues={state?.editingContact || null}> 
      <Row gutter={8} align='bottom'>
        <Col span={24}>
          <Form.Item
            name='name'
            label='Nome do Local'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('Nome do Local') }
            ]}
            >
            <Input 
              placeholder='Digite um Nome'
              addonAfter={<EditOutlined />}
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
              placeholder='Escolha uma opção'
              options={options}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='price'
            label='Valor'
          >
            <InputNumber 
              placeholder='0,00'
              min={0.01}
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
              htmlType='submit'
              onClick={handleSubmit}
              loading={loading}
            >
              Confirmar
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
